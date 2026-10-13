import React, { useState } from 'react';
import { Terminal, Boxes, Network, Activity, Cpu, ShieldCheck } from 'lucide-react';

interface NodeDetail {
  id: string;
  name: string;
  role: string;
  status: 'ONLINE' | 'ACTIVE' | 'OPTIMAL';
  metrics: string;
  tech: string[];
}

const NODES: Record<string, NodeDetail> = {
  linux: {
    id: 'linux',
    name: 'Linux Systems',
    role: 'Серверные платформы',
    status: 'ONLINE',
    metrics: 'Uptime: 99.98% | systemd healthy',
    tech: ['Ubuntu Server', 'Debian', 'Astra Linux', 'РЕД ОС', 'CentOS'],
  },
  virt: {
    id: 'virt',
    name: 'Virtualization',
    role: 'Кластеры вычислений',
    status: 'OPTIMAL',
    metrics: 'vSphere High Availability | vMotion Active',
    tech: ['VMware vCenter', 'ESXi Cluster', 'Hyper-V', 'VirtualBox'],
  },
  network: {
    id: 'network',
    name: 'Network Fabric',
    role: 'Маршрутизация & Каналы',
    status: 'ACTIVE',
    metrics: 'L2/L3 VLANs | Cisco IOS | VPN OK',
    tech: ['Cisco IOS XE', 'Eltex L3', 'STP / LACP', 'LTE / PLTE'],
  },
  monitoring: {
    id: 'monitoring',
    name: 'Monitoring & Logs',
    role: 'Наблюдаемость & Метрики',
    status: 'OPTIMAL',
    metrics: 'Zabbix triggers OK | Grafana live',
    tech: ['Zabbix 7.0', 'Grafana Dashboards', 'Cyber Backup'],
  },
  automation: {
    id: 'automation',
    name: 'Automation & Services',
    role: 'Контейнеры & Внутренний Web',
    status: 'ONLINE',
    metrics: 'Docker Compose | Nginx Reverse Proxy',
    tech: ['Docker', 'Nginx', 'Express', 'React', 'SQLite3'],
  },
};

export const InfrastructureDiagram: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('linux');
  const activeDetail = NODES[selectedNode];

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-graphite-900 to-graphite-950 border border-slate-800/80 p-5 sm:p-6 shadow-2xl overflow-hidden">
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 tech-dot-grid opacity-30 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-terminal-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-terminal-cyan/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header of the Terminal Card */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-terminal-green animate-ping" />
          <span className="text-slate-300 font-semibold uppercase tracking-wider">
            Topology Engine v2.4
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-slate-400">
          <span className="text-terminal-green">SYS_HEALTH: 100%</span>
          <span>•</span>
          <span className="text-terminal-cyan">NODES: 5/5 ONLINE</span>
        </div>
      </div>

      {/* Interactive Topology Graph Area */}
      <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full max-h-[380px] flex items-center justify-center">
        {/* SVG Connection Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="lineGradGreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="lineGradCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Core to Node Lines */}
          {/* Core (200, 150) -> Top Left Linux (70, 70) */}
          <path
            d="M 200 150 L 70 70"
            stroke="url(#lineGradGreen)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="animate-pulse opacity-70"
          />
          {/* Core (200, 150) -> Top Right Virtualization (330, 70) */}
          <path
            d="M 200 150 L 330 70"
            stroke="url(#lineGradCyan)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="animate-pulse opacity-70"
          />
          {/* Core (200, 150) -> Bottom Left Network (70, 230) */}
          <path
            d="M 200 150 L 70 230"
            stroke="url(#lineGradCyan)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="animate-pulse opacity-70"
          />
          {/* Core (200, 150) -> Bottom Right Monitoring (330, 230) */}
          <path
            d="M 200 150 L 330 230"
            stroke="url(#lineGradGreen)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="animate-pulse opacity-70"
          />
          {/* Core (200, 150) -> Bottom Automation (200, 260) */}
          <path
            d="M 200 150 L 200 260"
            stroke="url(#lineGradGreen)"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            className="opacity-70"
          />

          {/* Orbit concentric ring */}
          <circle
            cx="200"
            cy="150"
            r="115"
            stroke="#1e293b"
            strokeWidth="1"
            strokeDasharray="2 6"
            className="opacity-50"
          />
        </svg>

        {/* Central Core Backbone Hub */}
        <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-graphite-900 border-2 border-terminal-green/50 flex flex-col items-center justify-center p-2 shadow-glow-green text-center transition-transform hover:scale-105">
              <ShieldCheck className="w-6 h-6 text-terminal-green mb-1" />
              <span className="text-[10px] font-mono font-bold text-white leading-tight">
                CORE
              </span>
              <span className="text-[8px] font-mono text-terminal-green tracking-tighter">
                BACKBONE
              </span>
            </div>
            {/* Pulse wave ring */}
            <div className="absolute -inset-1.5 rounded-2xl border border-terminal-green/30 animate-ping pointer-events-none" />
          </div>
        </div>

        {/* Node 1: Linux (Top-Left) */}
        <button
          type="button"
          onClick={() => setSelectedNode('linux')}
          aria-label="Inspect Linux Systems Node"
          className={`absolute top-[8%] left-[4%] sm:left-[8%] z-20 flex items-center gap-2 p-2 sm:p-2.5 rounded-xl border text-left transition-all duration-200 ${
            selectedNode === 'linux'
              ? 'bg-graphite-800 border-terminal-green shadow-glow-green scale-105'
              : 'bg-graphite-900/90 hover:bg-graphite-850 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-terminal-green/40 flex items-center justify-center text-terminal-green shrink-0">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="hidden sm:block">
            <div className="text-xs font-mono font-semibold text-white">Linux Nodes</div>
            <div className="text-[10px] font-mono text-terminal-green">ONLINE</div>
          </div>
        </button>

        {/* Node 2: Virtualization (Top-Right) */}
        <button
          type="button"
          onClick={() => setSelectedNode('virt')}
          aria-label="Inspect Virtualization Node"
          className={`absolute top-[8%] right-[4%] sm:right-[8%] z-20 flex items-center gap-2 p-2 sm:p-2.5 rounded-xl border text-left transition-all duration-200 ${
            selectedNode === 'virt'
              ? 'bg-graphite-800 border-terminal-cyan shadow-glow-cyan scale-105'
              : 'bg-graphite-900/90 hover:bg-graphite-850 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-terminal-cyan/40 flex items-center justify-center text-terminal-cyan shrink-0">
            <Boxes className="w-4 h-4" />
          </div>
          <div className="hidden sm:block">
            <div className="text-xs font-mono font-semibold text-white">Virtualization</div>
            <div className="text-[10px] font-mono text-terminal-cyan">vSphere / vCenter</div>
          </div>
        </button>

        {/* Node 3: Network (Bottom-Left) */}
        <button
          type="button"
          onClick={() => setSelectedNode('network')}
          aria-label="Inspect Network Fabric Node"
          className={`absolute bottom-[16%] left-[4%] sm:left-[8%] z-20 flex items-center gap-2 p-2 sm:p-2.5 rounded-xl border text-left transition-all duration-200 ${
            selectedNode === 'network'
              ? 'bg-graphite-800 border-terminal-cyan shadow-glow-cyan scale-105'
              : 'bg-graphite-900/90 hover:bg-graphite-850 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-terminal-cyan/40 flex items-center justify-center text-terminal-cyan shrink-0">
            <Network className="w-4 h-4" />
          </div>
          <div className="hidden sm:block">
            <div className="text-xs font-mono font-semibold text-white">Network Fabric</div>
            <div className="text-[10px] font-mono text-terminal-cyan">Cisco & Eltex</div>
          </div>
        </button>

        {/* Node 4: Monitoring (Bottom-Right) */}
        <button
          type="button"
          onClick={() => setSelectedNode('monitoring')}
          aria-label="Inspect Monitoring Node"
          className={`absolute bottom-[16%] right-[4%] sm:right-[8%] z-20 flex items-center gap-2 p-2 sm:p-2.5 rounded-xl border text-left transition-all duration-200 ${
            selectedNode === 'monitoring'
              ? 'bg-graphite-800 border-terminal-green shadow-glow-green scale-105'
              : 'bg-graphite-900/90 hover:bg-graphite-850 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-terminal-green/40 flex items-center justify-center text-terminal-green shrink-0">
            <Activity className="w-4 h-4" />
          </div>
          <div className="hidden sm:block">
            <div className="text-xs font-mono font-semibold text-white">Monitoring</div>
            <div className="text-[10px] font-mono text-terminal-green">Zabbix & Grafana</div>
          </div>
        </button>

        {/* Node 5: Automation & Services (Bottom Center) */}
        <button
          type="button"
          onClick={() => setSelectedNode('automation')}
          aria-label="Inspect Automation Node"
          className={`absolute bottom-[2%] left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 p-2 sm:p-2.5 rounded-xl border text-left transition-all duration-200 ${
            selectedNode === 'automation'
              ? 'bg-graphite-800 border-terminal-green shadow-glow-green scale-105'
              : 'bg-graphite-900/90 hover:bg-graphite-850 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-terminal-green/40 flex items-center justify-center text-terminal-green shrink-0">
            <Cpu className="w-4 h-4" />
          </div>
          <div className="hidden sm:block">
            <div className="text-xs font-mono font-semibold text-white">Automation</div>
            <div className="text-[10px] font-mono text-terminal-green">Docker & Web Tools</div>
          </div>
        </button>
      </div>

      {/* Node Telemetry / Inspector Panel */}
      <div className="mt-4 pt-4 border-t border-slate-800/80 bg-graphite-900/80 rounded-xl p-3.5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-terminal-green" />
            <span className="text-xs font-mono font-bold text-white">
              {activeDetail.name}
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              [{activeDetail.role}]
            </span>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-terminal-green/10 text-terminal-green border border-terminal-green/30">
            {activeDetail.status}
          </span>
        </div>

        <div className="text-xs font-mono text-slate-300 mb-2.5">
          <span className="text-slate-500">MTRX:</span> {activeDetail.metrics}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {activeDetail.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-graphite-800 text-slate-300 border border-slate-700/60"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
