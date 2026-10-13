export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  tagline?: string;
  keyTechnologies?: string[];
  duties: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'turing-machines',
    company: 'ООО «Летающие Машины Тюринга»',
    role: 'Менеджер по ИТ',
    period: 'Октябрь 2025 — настоящее время',
    location: 'Калуга, Россия',
    isCurrent: true,
    tagline: 'Инфраструктура наземных станций управления БПЛА и разработка сервисных инструментов',
    keyTechnologies: ['Linux', 'LTE / PLTE', 'Docker Compose', 'Nginx', 'React', 'Node.js', 'systemd', 'VPN/SSH'],
    duties: [
      'Настройка, сопровождение и диагностика наземных станций управления БПЛА, телеметрии и каналов связи.',
      'Организация и поддержка LTE/PLTE-каналов.',
      'Настройка сетевой инфраструктуры, маршрутизации, VPN, SSH и reverse proxy.',
      'Разработка внутренних веб-инструментов для мониторинга и сервисного обслуживания.',
      'Создание сервиса учёта оборудования, диагностики и технического обслуживания.',
      'Контейнеризация сервисов с Docker и Docker Compose.',
      'Эксплуатация Linux-компонентов с Nginx и systemd.',
    ],
  },
  {
    id: 'nestle',
    company: 'ООО «Нестле Россия»',
    role: 'Специалист информационных систем и технологий',
    period: 'Июнь 2025 — октябрь 2025',
    location: 'Россия',
    tagline: 'Корпоративная виртуализация VMware vSphere, сети Cisco/Eltex и мониторинг',
    keyTechnologies: ['VMware vSphere', 'ESXi', 'Cisco / Eltex', 'Astra Linux', 'РЕД ОС', 'Zabbix', 'Cyber Backup'],
    duties: [
      'Эксплуатация VMware vSphere, vCenter, ESXi, кластеризации и vMotion.',
      'Администрирование Astra Linux и РЕД ОС.',
      'Работа с Cisco и Eltex L2/L3, VLAN, STP и Cisco Wireless.',
      'Мониторинг инфраструктуры в Zabbix.',
      'Резервное копирование и восстановление с Cyber Backup.',
      'Развёртывание сервисов Docker и Docker Compose.',
    ],
  },
  {
    id: 'smu-1',
    company: 'ООО «СМУ №1»',
    role: 'Ведущий специалист ГИТ',
    period: 'Январь 2025 — май 2025',
    location: 'Египет',
    tagline: 'Проектирование и развёртывание виртуальной инфраструктуры на зарубежном проекте',
    keyTechnologies: ['Hyper-V', 'VirtualBox', 'Windows Server', 'Linux', 'Grafana', 'Backup & Security'],
    duties: [
      'Проектирование и развёртывание виртуальной инфраструктуры на Hyper-V и VirtualBox.',
      'Администрирование Linux и Windows Server.',
      'Мониторинг систем с Grafana.',
      'Настройка безопасности и резервного копирования.',
      'Разработка технической документации.',
    ],
  },
  {
    id: 'sibintek',
    company: 'ООО ИК «СИБИНТЕК»',
    role: 'Инженер отдела ИТ-сервисов, инфраструктуры и телекоммуникаций',
    period: 'Ноябрь 2022 — сентябрь 2024',
    location: 'Красноярск, Россия',
    tagline: 'Масштабная корпоративная инфраструктура и сопровождение 1000+ пользователей',
    keyTechnologies: ['Active Directory', 'PowerShell', 'Hyper-V', 'Debian / Ubuntu / CentOS', 'Exchange', 'IP-телефония'],
    duties: [
      'Решение инцидентов и поддержка более 1000 пользователей.',
      'Администрирование Active Directory и доменной среды.',
      'Работа с PowerShell, RDP, Hyper-V, Debian, Ubuntu, CentOS и Exchange.',
      'Сопровождение спутникового оборудования, IP-телефонии, физических серверов и сетевой инфраструктуры.',
    ],
  },
  {
    id: 'ventra-senior',
    company: 'ООО «Вентра Ай-Ти»',
    role: 'Старший инженер Service Desk',
    period: 'Июнь 2020 — ноябрь 2022',
    location: 'Россия',
    tagline: 'Координация решений пользовательских инцидентов и отчётность в распределённой среде',
    keyTechnologies: ['Service Desk', 'ITSM', 'Поддержка 1000+ польз.', 'Анализ инцидентов'],
    duties: [
      'Решение пользовательских инцидентов.',
      'Итоговая отчётность и поддержка более 1000 пользователей.',
    ],
  },
  {
    id: 'ventra-engineer',
    company: 'ООО «Вентра Ай-Ти»',
    role: 'Инженер IT Service Desk',
    period: 'Июнь 2019 — ноябрь 2020',
    location: 'Россия',
    tagline: 'Администрирование учётных записей Active Directory, SCCM и автоматизация скриптами',
    keyTechnologies: ['Active Directory', 'SCCM', 'PowerShell', 'ITSM'],
    duties: [
      'Поддержка Active Directory, SCCM и PowerShell.',
      'Настройка программного обеспечения и доменных учётных записей.',
      'Обработка инцидентов в ITSM-системах.',
    ],
  },
  {
    id: 'kaluga-astral',
    company: 'ЗАО «Калуга-Астрал»',
    role: 'Специалист технической поддержки',
    period: 'Апрель 2017 — июнь 2017',
    location: 'Калуга, Россия',
    tagline: 'Первичный опыт клиентской и системной технической поддержки',
    keyTechnologies: ['Техподдержка', '1С:Бухгалтерия', 'Диагностика'],
    duties: [
      'Техническая поддержка пользователей «1С:Бухгалтерия».',
    ],
  },
];
