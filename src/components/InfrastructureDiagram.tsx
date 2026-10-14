import React, { useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Activity, Boxes, CloudCog, Network, ShieldCheck, Terminal, Workflow } from 'lucide-react';

const nodes = [
  { id:'linux', label:'Linux', sub:'Server estate', icon:Terminal, tech:'Debian · Astra · Ubuntu', metric:'99.98%', tint:'mint' },
  { id:'virtual', label:'Virtualization', sub:'Compute layer', icon:Boxes, tech:'VMware · Hyper-V', metric:'5 hosts', tint:'blue' },
  { id:'network', label:'Network', sub:'Core & edge', icon:Network, tech:'Cisco · Eltex · VPN', metric:'L2 / L3', tint:'violet' },
  { id:'observe', label:'Observability', sub:'Signals & events', icon:Activity, tech:'Zabbix · Grafana', metric:'Live', tint:'amber' },
  { id:'automation', label:'Automation', sub:'Tools & delivery', icon:Workflow, tech:'Docker · Bash · PowerShell', metric:'Active', tint:'rose' },
];

export const InfrastructureDiagram: React.FC = () => {
  const [selected, setSelected] = useState(nodes[0]);
  const sceneRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sceneRef, offset: ['start end', 'end start'] });
  const tiltY = useTransform(scrollYProgress, [0, .5, 1], [7, 0, -4]);
  const lift = useTransform(scrollYProgress, [0, .5, 1], [34, 0, -18]);

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    event.currentTarget.style.setProperty('--tilt-x', `${-y * 7}deg`);
    event.currentTarget.style.setProperty('--tilt-y', `${x * 9}deg`);
    event.currentTarget.style.setProperty('--pointer-x', `${(x + .5) * 100}%`);
    event.currentTarget.style.setProperty('--pointer-y', `${(y + .5) * 100}%`);
  };
  const resetPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty('--tilt-x', '0deg');
    event.currentTarget.style.setProperty('--tilt-y', '0deg');
  };

  return (
    <motion.div ref={sceneRef} style={reduceMotion ? undefined : { rotateY: tiltY, y: lift }} className="infra-scene-wrap">
      <div className="infra-scene" onPointerMove={onPointerMove} onPointerLeave={resetPointer}>
        <div className="infra-scene-glow" />
        <div className="infra-scene-topbar">
          <div><span className="eyebrow !text-[9px]">Live system</span><p>Infrastructure overview</p></div>
          <span className="infra-live"><i />All systems normal</span>
        </div>

        <div className="infra-stage">
          <div className="infra-orbit infra-orbit-a" />
          <div className="infra-orbit infra-orbit-b" />
          <svg className="infra-links" viewBox="0 0 520 340" aria-hidden="true">
            <defs><linearGradient id="infraLine" x1="0" y1="0" x2="1" y2="1"><stop stopColor="var(--accent)" stopOpacity=".72"/><stop offset="1" stopColor="var(--accent-2)" stopOpacity=".08"/></linearGradient></defs>
            <path d="M260 168 104 75M260 168 416 75M260 168 105 267M260 168 415 267M260 168 260 300" stroke="url(#infraLine)" strokeWidth="1.5" strokeDasharray="5 7" fill="none" className="infra-dash"/>
            <circle cx="260" cy="168" r="5" fill="var(--accent)" className="infra-packet"><animate attributeName="opacity" values=".3;1;.3" dur="2.4s" repeatCount="indefinite"/></circle>
          </svg>

          <div className="infra-platform"><div className="infra-platform-face"/><div className="infra-platform-top"/><div className="infra-platform-light"/></div>

          <motion.button type="button" onClick={()=>setSelected(nodes[0])} className={`infra-node infra-node-linux ${selected.id==='linux'?'is-selected':''}`} whileHover={{ y:-8, rotateX:5, rotateY:-5 }} transition={{type:'spring',stiffness:260,damping:18}}>
            <Terminal/><span><b>Linux</b><small>Server estate</small></span><i className="infra-node-led"/>
          </motion.button>
          <motion.button type="button" onClick={()=>setSelected(nodes[1])} className={`infra-node infra-node-virtual ${selected.id==='virtual'?'is-selected':''}`} whileHover={{ y:-8, rotateX:5, rotateY:5 }} transition={{type:'spring',stiffness:260,damping:18}}>
            <Boxes/><span><b>Virtualization</b><small>Compute layer</small></span><i className="infra-node-led"/>
          </motion.button>
          <motion.button type="button" onClick={()=>setSelected(nodes[2])} className={`infra-node infra-node-network ${selected.id==='network'?'is-selected':''}`} whileHover={{ y:-8, rotateX:-4, rotateY:-5 }} transition={{type:'spring',stiffness:260,damping:18}}>
            <Network/><span><b>Network</b><small>Core & edge</small></span><i className="infra-node-led"/>
          </motion.button>
          <motion.button type="button" onClick={()=>setSelected(nodes[3])} className={`infra-node infra-node-observe ${selected.id==='observe'?'is-selected':''}`} whileHover={{ y:-8, rotateX:-4, rotateY:5 }} transition={{type:'spring',stiffness:260,damping:18}}>
            <Activity/><span><b>Observability</b><small>Signals & events</small></span><i className="infra-node-led"/>
          </motion.button>
          <motion.button type="button" onClick={()=>setSelected(nodes[4])} className={`infra-node infra-node-auto ${selected.id==='automation'?'is-selected':''}`} whileHover={{ y:-8, rotateX:4 }} transition={{type:'spring',stiffness:260,damping:18}}>
            <Workflow/><span><b>Automation</b><small>Tools & delivery</small></span><i className="infra-node-led"/>
          </motion.button>

          <motion.div className="infra-core" animate={reduceMotion?undefined:{y:[0,-5,0]}} transition={{duration:4,repeat:Infinity,ease:'easeInOut'}}>
            <div className="infra-core-glass"><ShieldCheck/><span>CORE</span><small>CONTROL PLANE</small></div>
            <div className="infra-core-ring"/>
          </motion.div>
        </div>

        <motion.div key={selected.id} initial={{opacity:0,y:7}} animate={{opacity:1,y:0}} transition={{duration:.25}} className="infra-inspector">
          <div className="infra-inspector-icon"><selected.icon/></div>
          <div className="infra-inspector-main"><span>{selected.sub}</span><strong>{selected.label}</strong></div>
          <div className="infra-inspector-tech">{selected.tech}</div>
          <div className="infra-inspector-metric"><i/>{selected.metric}</div>
        </motion.div>
        <div className="infra-foot"><span><CloudCog size={13}/> Resilient by design</span><span>01 — 05</span></div>
      </div>
    </motion.div>
  );
};
