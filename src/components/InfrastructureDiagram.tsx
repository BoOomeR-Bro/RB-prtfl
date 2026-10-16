import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Boxes, CloudCog, Network, ShieldCheck, Terminal, Workflow } from 'lucide-react';

const nodes = [
  { id: 'linux', label: 'Linux', sub: 'Server estate', icon: Terminal, tech: 'Debian · Astra · Ubuntu', metric: '99.98%' },
  { id: 'virtual', label: 'Virtualization', sub: 'Compute layer', icon: Boxes, tech: 'VMware · Hyper-V', metric: '5 hosts' },
  { id: 'network', label: 'Network', sub: 'Core & edge', icon: Network, tech: 'Cisco · Eltex · VPN', metric: 'L2 / L3' },
  { id: 'observe', label: 'Observability', sub: 'Signals & events', icon: Activity, tech: 'Zabbix · Grafana', metric: 'Live' },
  { id: 'automation', label: 'Automation', sub: 'Tools & delivery', icon: Workflow, tech: 'Docker · Bash · PowerShell', metric: 'Active' },
];

export const InfrastructureDiagram: React.FC = () => {
  const [selected, setSelected] = useState(nodes[0]);
  const SelectedIcon = selected.icon;

  return (
    <div className="infra-ticket-wrap">
      <article className="infra-ticket" aria-label="Live system infrastructure overview">
        <header className="infra-ticket-header">
          <div className="infra-ticket-brand">
            <span className="infra-ticket-mark"><ShieldCheck size={17} /></span>
            <div>
              <span className="infra-ticket-kicker">Live system</span>
              <h2>Infrastructure overview</h2>
            </div>
          </div>
          <span className="infra-ticket-status"><i />All systems normal</span>
        </header>

        <div className="infra-ticket-content">
          <section className="infra-ticket-services" aria-label="Infrastructure layers">
            <div className="infra-ticket-sectionline">
              <span>Infrastructure layers</span>
              <span>01 — 05</span>
            </div>
            <div className="infra-ticket-list">
              {nodes.map((node, index) => {
                const Icon = node.icon;
                const active = selected.id === node.id;
                return (
                  <button
                    type="button"
                    key={node.id}
                    onClick={() => setSelected(node)}
                    className={`infra-ticket-layer${active ? ' is-active' : ''}`}
                    aria-pressed={active}
                  >
                    <span className="infra-ticket-layer-number">0{index + 1}</span>
                    <span className="infra-ticket-layer-icon"><Icon size={16} /></span>
                    <span className="infra-ticket-layer-copy"><b>{node.label}</b><small>{node.sub}</small></span>
                    <span className="infra-ticket-layer-led" />
                  </button>
                );
              })}
            </div>
          </section>

          <aside className="infra-ticket-stub" aria-live="polite">
            <span className="infra-ticket-admit">ADMIT ONE</span>
            <motion.div
              key={selected.id}
              className="infra-ticket-detail"
              initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="infra-ticket-detail-icon"><SelectedIcon size={22} /></span>
              <span className="infra-ticket-detail-label">{selected.sub}</span>
              <strong>{selected.label}</strong>
              <span className="infra-ticket-tech">{selected.tech}</span>
              <span className="infra-ticket-metric"><i />{selected.metric}</span>
            </motion.div>
            <div className="infra-ticket-stub-code" aria-hidden="true">
              <span>CORE / CONTROL PLANE</span>
              <div className="infra-ticket-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
            </div>
          </aside>
        </div>

        <footer className="infra-ticket-footer">
          <span><CloudCog size={14} />Resilient by design</span>
          <span className="infra-ticket-footer-id">RB · INFRA / 2026</span>
        </footer>
      </article>
    </div>
  );
};
