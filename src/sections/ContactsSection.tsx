import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Plane,
  Download,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import { profileData } from '../data/profile';
import { SectionHeader } from '../components/SectionHeader';
import { CopyButton } from '../components/CopyButton';
import { MotionReveal } from '../components/MotionReveal';

export const ContactsSection: React.FC = () => {
  const availableSocials = profileData.socials.filter((s) => s.isAvailable && s.url);

  return (
    <section id="contacts" className="py-24 bg-graphite-900/60 relative border-t border-slate-900">
      {/* Background ambient light */}
      <div className="absolute inset-0 tech-dot-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-terminal-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionReveal direction="up" distance={30}>
          <SectionHeader
            badge="// 06. CONTACTS"
            title="Есть инфраструктурная задача? Давайте обсудим"
            description="Открыт к интересным инженерным задачам, развитию инфраструктуры, автоматизации и созданию внутренних сервисов."
          />
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Direct Contacts: 8 cols (Relic floats up from bottom-left) */}
          <div className="lg:col-span-8">
            <MotionReveal direction="up" distance={50} delay={0.1} scale className="h-full">
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-graphite-900/90 border border-slate-800 shadow-2xl flex flex-col justify-between hover:border-slate-700 transition-colors">
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6">
                    Прямые каналы связи:
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                    {/* Email Card */}
                    <div className="p-5 rounded-xl bg-graphite-950/80 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between shadow-md hover:shadow-glow-green hover:-translate-y-1">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-terminal-green/30 flex items-center justify-center text-terminal-green">
                            <Mail className="w-4 h-4" />
                          </div>
                          <CopyButton
                            textToCopy={profileData.contacts.email}
                            itemKey="email"
                            label="Скопировать email"
                          />
                        </div>
                        <div className="text-xs font-mono text-slate-400 mb-1">
                          Электронная почта
                        </div>
                        <a
                          href={`mailto:${profileData.contacts.email}`}
                          className="text-base sm:text-lg font-mono font-bold text-white hover:text-terminal-accent transition-colors break-all"
                        >
                          {profileData.contacts.email}
                        </a>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-850">
                        <a
                          href={`mailto:${profileData.contacts.email}`}
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-terminal-green hover:underline"
                        >
                          <span>Написать письмо</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {/* Phone Card */}
                    <div className="p-5 rounded-xl bg-graphite-950/80 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between shadow-md hover:shadow-glow-cyan hover:-translate-y-1">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-9 h-9 rounded-lg bg-sky-950/80 border border-terminal-cyan/30 flex items-center justify-center text-terminal-cyan">
                            <Phone className="w-4 h-4" />
                          </div>
                          <CopyButton
                            textToCopy={profileData.contacts.phone}
                            itemKey="phone"
                            label="Скопировать номер"
                          />
                        </div>
                        <div className="text-xs font-mono text-slate-400 mb-1">
                          Мобильный телефон
                        </div>
                        <a
                          href={`tel:${profileData.contacts.phone}`}
                          className="text-base sm:text-lg font-mono font-bold text-white hover:text-terminal-cyan transition-colors"
                        >
                          {profileData.contacts.phoneFormatted}
                        </a>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-850">
                        <a
                          href={`tel:${profileData.contacts.phone}`}
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-terminal-cyan hover:underline"
                        >
                          <span>Позвонить</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Status and Location Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80 text-sm">
                    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-graphite-950/50 border border-slate-850">
                      <MapPin className="w-4 h-4 text-terminal-green shrink-0" />
                      <div>
                        <div className="text-xs font-mono text-slate-400">Локация:</div>
                        <div className="text-white font-medium">
                          {profileData.contacts.location}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-graphite-950/50 border border-slate-850">
                      <Plane className="w-4 h-4 text-terminal-cyan shrink-0" />
                      <div>
                        <div className="text-xs font-mono text-slate-400">Мобильность:</div>
                        <div className="text-white font-medium">
                          {profileData.contacts.relocationOrTravel}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Optional Socials: Only rendered if enabled in profileData */}
                {availableSocials.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-slate-800 flex items-center gap-3">
                    <span className="text-xs font-mono text-slate-400">Профили:</span>
                    {availableSocials.map((social) => (
                      <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-graphite-950 hover:bg-graphite-850 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono transition-colors"
                      >
                        <span>{social.label}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </MotionReveal>
          </div>

          {/* Quick Resume & Status Card: 4 cols (Relic floats up from bottom-right) */}
          <div className="lg:col-span-4">
            <MotionReveal direction="up" distance={50} delay={0.2} scale className="h-full">
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-graphite-900 to-graphite-950 border border-slate-800 shadow-2xl flex flex-col justify-between hover:border-slate-700 transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-terminal-green/40 flex items-center justify-center text-terminal-green mb-5">
                    <MessageSquare className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    Готов к диалогу
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    Вы можете связаться со мной напрямую по телефону, в мессенджерах по привязанному номеру или отправить письмо на рабочую почту.
                  </p>

                  <div className="p-4 rounded-xl bg-graphite-950 border border-slate-850 font-mono text-xs text-slate-400 space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Статус:</span>
                      <span className="text-terminal-green font-semibold">
                        Рассматриваю предложения
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Формат:</span>
                      <span className="text-slate-200">Офис / Гибрид / Удалённо</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-850">
                  <a
                    href={profileData.resume.downloadUrl}
                    download={profileData.resume.fileName}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-terminal-green text-slate-950 font-mono font-semibold text-sm hover:bg-terminal-accent transition-all duration-200 shadow-glow-green hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Download className="w-4 h-4" />
                    <span>{profileData.resume.label}</span>
                  </a>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
