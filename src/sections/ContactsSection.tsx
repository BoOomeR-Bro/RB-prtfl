import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Plane, Download, ArrowUpRight, MessageCircle } from 'lucide-react';
import { profileData } from '../data/profile';
import { SectionHeader } from '../components/SectionHeader';
import { CopyButton } from '../components/CopyButton';

export const ContactsSection: React.FC = () => {
  const socials = profileData.socials.filter((s)=>s.isAvailable&&s.url);
  return <section id="contacts" className="section-shell pb-24">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <SectionHeader title="Давайте обсудим, что можно улучшить" description="Открыт к инженерным задачам, развитию инфраструктуры, автоматизации и созданию полезных внутренних сервисов." badge="Контакт" />
      <div className="grid lg:grid-cols-[1.25fr_.75fr] gap-4 items-stretch">
        <motion.div initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="glass-panel rounded-[1.8rem] p-6 sm:p-9">
          <span className="eyebrow">Прямые каналы</span>
          <div className="grid sm:grid-cols-2 gap-3 mt-6">
            <div className="glass-inset rounded-[1.3rem] p-5"><div className="flex items-center justify-between"><span className="text-[var(--accent)]"><Mail size={18}/></span><CopyButton textToCopy={profileData.contacts.email} itemKey="email" label="Скопировать email"/></div><p className="mt-5 text-[10px] uppercase tracking-wider text-[var(--muted)]">Электронная почта</p><a href={`mailto:${profileData.contacts.email}`} className="block mt-1 text-sm sm:text-base font-medium break-all hover:text-[var(--accent)] transition-colors">{profileData.contacts.email}</a></div>
            <div className="glass-inset rounded-[1.3rem] p-5"><div className="flex items-center justify-between"><span className="text-[var(--accent)]"><Phone size={18}/></span><CopyButton textToCopy={profileData.contacts.phone} itemKey="phone" label="Скопировать номер"/></div><p className="mt-5 text-[10px] uppercase tracking-wider text-[var(--muted)]">Телефон</p><a href={`tel:${profileData.contacts.phone}`} className="block mt-1 text-sm sm:text-base font-medium hover:text-[var(--accent)] transition-colors">{profileData.contacts.phoneFormatted}</a></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 mt-3"><div className="glass-inset rounded-xl px-4 py-3 flex items-center gap-3"><MapPin size={15} className="text-[var(--accent)]"/><div><span className="block text-[9px] uppercase tracking-wider text-[var(--muted)]">Локация</span><span className="text-xs">{profileData.contacts.location}</span></div></div><div className="glass-inset rounded-xl px-4 py-3 flex items-center gap-3"><Plane size={15} className="text-[var(--accent)]"/><div><span className="block text-[9px] uppercase tracking-wider text-[var(--muted)]">Мобильность</span><span className="text-xs">{profileData.contacts.relocationOrTravel}</span></div></div></div>
          {!!socials.length&&<div className="flex gap-2 mt-5">{socials.map(s=><a key={s.id} href={s.url} target="_blank" rel="noreferrer" className="glass-inset rounded-full px-3 py-2 text-xs">{s.label}<ArrowUpRight size={12} className="inline ml-1"/></a>)}</div>}
        </motion.div>
        <motion.aside initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:.1}} className="glass-panel rounded-[1.8rem] p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative">
          <div className="hero-orb w-56 h-56 -right-16 -top-20 bg-[var(--glow-a)] blur-3xl" />
          <div className="relative"><span className="glass-inset rounded-2xl p-3 inline-grid text-[var(--accent)]"><MessageCircle size={20}/></span><h3 className="mt-6 text-2xl font-semibold tracking-tight">Есть задача?</h3><p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">Напишите или позвоните — обсудим контекст и найдём рабочее решение.</p><div className="glass-inset rounded-2xl p-4 mt-6 text-xs"><div className="flex justify-between gap-3"><span className="text-[var(--muted)]">Статус</span><span className="inline-flex items-center gap-2"><span className="status-dot !w-1.5 !h-1.5"/>Открыт к предложениям</span></div><div className="flex justify-between gap-3 mt-3"><span className="text-[var(--muted)]">Формат</span><span>Офис · гибрид · удалённо</span></div></div></div>
          <a href={profileData.resume.downloadUrl} download={profileData.resume.fileName} className="glass-action relative mt-8 justify-center">{profileData.resume.label}<Download size={15}/></a>
        </motion.aside>
      </div>
      <div className="mt-5 flex items-center justify-between text-[10px] text-[var(--muted)]"><span>Обычно отвечаю в течение рабочего дня</span><span className="hidden sm:block">{profileData.fullNameEn} · {new Date().getFullYear()}</span></div>
    </div>
  </section>;
};
