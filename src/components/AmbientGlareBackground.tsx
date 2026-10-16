import { useEffect, useRef } from 'react';

const VERTEX_SHADER = `
attribute vec2 a_pos;
attribute vec2 a_uv;
varying vec2 v_uv;
void main() {
  v_uv = a_uv;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

const FRAGMENT_SHADER = `
precision highp float;
uniform vec4 u_motion;
uniform vec4 u_blue;
uniform vec4 u_pink;
uniform vec4 u_orange;
varying vec2 v_uv;

float gaussian(float x, float width) {
  return exp(-0.5 * x * x / max(width * width, 0.001));
}

void main() {
  vec2 p = (v_uv - vec2(0.5)) * vec2(440.0, 52.0);
  float prog = u_motion.x;
  float ignition = min(prog / 0.06, 1.0) * (1.0 - smoothstep(0.86, 1.0, prog));
  float flareX = mix(440.0 * 0.48, -440.0 * 0.45, prog);
  float gx = p.x - flareX;
  float soft = u_motion.w;
  float glowWidth = max(u_motion.y, 8.0);
  float band = gaussian(gx, glowWidth);
  float wake = smoothstep(flareX - glowWidth, flareX + glowWidth, p.x);
  float wash = (band * 0.5 + wake * 0.60) * ignition;
  float ribbon = gaussian(abs(p.y) - 26.0, 2.0 + soft * 2.2) * band * ignition;
  float warm = gaussian(prog - 0.89, 0.10);
  vec3 cool = u_blue.rgb * u_blue.a;
  vec3 rose = u_pink.rgb * u_pink.a;
  vec3 amber = u_orange.rgb * u_orange.a;
  vec3 glow = cool * (0.045 + wash * 0.63);
  glow += cool * gaussian(p.y, 16.0) * wake * ignition * 0.15;
  glow += cool * ribbon * 1.15;
  float crest = gaussian(p.y + 26.0, 4.5 + soft * 2.0) * band;
  glow += rose * crest * ignition * 1.10;
  float front = gaussian(gx, 11.0 + soft * 6.0) * ignition;
  glow += mix(rose, amber, warm) * front * (0.25 + 0.75 * warm);
  glow = clamp(glow * u_motion.z, vec3(0.0), vec3(1.0));
  float alpha = max(glow.r, max(glow.g, glow.b));
  gl_FragColor = vec4(glow, alpha);
}`;

function compileShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) throw new Error('Unable to create WebGL shader');
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const message = gl.getShaderInfoLog(shader) || 'WebGL shader compilation failed';
    gl.deleteShader(shader);
    throw new Error(message);
  }
  return shader;
}

function createProgram(gl: WebGLRenderingContext) {
  const program = gl.createProgram();
  if (!program) throw new Error('Unable to create WebGL program');
  const vertex = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
  const fragment = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  gl.deleteShader(vertex);
  gl.deleteShader(fragment);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const message = gl.getProgramInfoLog(program) || 'WebGL program linking failed';
    gl.deleteProgram(program);
    throw new Error(message);
  }
  return program;
}

/** Full-viewport blue, pink, and amber scan shader behind the portfolio. */
export function AmbientGlareBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', {
      alpha: true,
      antialias: false,
      premultipliedAlpha: true,
      preserveDrawingBuffer: false,
    });
    if (!gl) return;

    let program: WebGLProgram;
    try {
      program = createProgram(gl);
    } catch {
      return;
    }

    const buffer = gl.createBuffer();
    if (!buffer) {
      gl.deleteProgram(program);
      return;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1, 0, 1, 1, -1, 1, 1, -1, 1, 0, 0,
        -1, 1, 0, 0, 1, -1, 1, 1, 1, 1, 1, 0,
      ]),
      gl.STATIC_DRAW,
    );

    const position = gl.getAttribLocation(program, 'a_pos');
    const uv = gl.getAttribLocation(program, 'a_uv');
    const motion = gl.getUniformLocation(program, 'u_motion');
    const blue = gl.getUniformLocation(program, 'u_blue');
    const pink = gl.getUniformLocation(program, 'u_pink');
    const orange = gl.getUniformLocation(program, 'u_orange');
    if ([motion, blue, pink, orange].some((uniform) => uniform === null)) {
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      return;
    }

    gl.useProgram(program);
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 16, 0);
    gl.enableVertexAttribArray(uv);
    gl.vertexAttribPointer(uv, 2, gl.FLOAT, false, 16, 8);
    gl.disable(gl.DEPTH_TEST);

    let raf = 0;
    let lastDrawAt = 0;
    let startedAt = performance.now();
    let visible = !document.hidden;
    let progressOffset = 0;
    const frameInterval = 1000 / 30;
    const duration = 14;
    const colors = {
      blue: [0.56, 0.82, 0.67, 0.62],
      pink: [0.75, 0.88, 0.72, 0.48],
      orange: [0.87, 0.91, 0.68, 0.4],
    } as const;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.max(1, Math.floor(canvas.clientWidth * dpr));
      const height = Math.max(1, Math.floor(canvas.clientHeight * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, width, height);
    };

    const frame = (now: number) => {
      raf = 0;
      if (!visible) return;
      if (now - lastDrawAt < frameInterval) {
        raf = window.requestAnimationFrame(frame);
        return;
      }
      lastDrawAt = now;
      const progress = ((now - startedAt) / (duration * 1000) + progressOffset) % 1;
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform4f(motion, progress, 82, 0.82, 0.95);
      gl.uniform4f(blue, ...colors.blue);
      gl.uniform4f(pink, ...colors.pink);
      gl.uniform4f(orange, ...colors.orange);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = window.requestAnimationFrame(frame);
    };

    const start = () => {
      if (visible && !raf) raf = window.requestAnimationFrame(frame);
    };
    const onVisibilityChange = () => {
      if (document.hidden) {
        visible = false;
        progressOffset = ((performance.now() - startedAt) / (duration * 1000) + progressOffset) % 1;
        if (raf) window.cancelAnimationFrame(raf);
        raf = 0;
      } else {
        visible = true;
        startedAt = performance.now();
        start();
      }
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    document.addEventListener('visibilitychange', onVisibilityChange);
    resize();
    start();

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
    };
  }, []);

  return <canvas ref={canvasRef} className="ambient-glare-background" aria-hidden="true" />;
}
