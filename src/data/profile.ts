export interface ContactInfo {
  email: string;
  phone: string;
  phoneFormatted: string;
  location: string;
  relocationOrTravel: string;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  iconName: string;
  isAvailable: boolean; // Set to true when user provides link
}

export interface ProfileData {
  name: string;
  fullNameEn: string;
  shortLogo: string;
  roleBadge: string;
  heroHeadline: string;
  heroSubtitle: string;
  resume: {
    downloadUrl: string;
    fileName: string;
    label: string;
  };
  stats: {
    value: string;
    label: string;
    description: string;
  }[];
  about: {
    title: string;
    paragraphs: string[];
    focusAreas: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  contacts: ContactInfo;
  socials: SocialLink[];
}

export const profileData: ProfileData = {
  name: 'Руслан Бабинов',
  fullNameEn: 'Ruslan Babinov',
  shortLogo: 'RB',
  roleBadge: 'IT INFRASTRUCTURE ENGINEER',
  heroHeadline: 'Проектирую, автоматизирую и поддерживаю IT-инфраструктуру',
  heroSubtitle:
    'Более 7 лет в системном администрировании, сетях, виртуализации и эксплуатации корпоративных систем. Объединяю инфраструктурную экспертизу с автоматизацией и разработкой внутренних инструментов.',
  resume: {
    downloadUrl: '/files/resume.pdf',
    fileName: 'Руслан_Бабинов_Инженер_ИТ_инфраструктуры_Резюме.pdf',
    label: 'Скачать резюме (PDF)',
  },
  stats: [
    {
      value: '7+ лет',
      label: 'Опыта в IT',
      description: 'Администрирование, эксплуатация, сети и виртуализация',
    },
    {
      value: '1000+',
      label: 'Пользователей',
      description: 'В опыте корпоративной технической поддержки',
    },
    {
      value: 'Linux & Windows',
      label: 'Серверные ОС',
      description: 'Debian, Astra Linux, Ubuntu, CentOS, Windows Server',
    },
    {
      value: 'Infra & DevOps',
      label: 'Инфраструктура',
      description: 'Виртуализация, автоматизация, мониторинг и Docker',
    },
  ],
  about: {
    title: 'Инфраструктура должна работать предсказуемо',
    paragraphs: [
      'Я инженер ИТ-инфраструктуры с опытом эксплуатации серверных систем, корпоративных сетей, виртуализации и технической поддержки. Работал с Linux и Windows Server, VMware vSphere, Hyper-V, сетевым оборудованием Cisco и Eltex, мониторингом Zabbix и Grafana.',
      'Помимо администрирования, разрабатываю внутренние веб-инструменты для мониторинга, учёта оборудования и автоматизации сервисных процессов. Мне интересно находить причины сложных технических проблем, выстраивать понятные процессы эксплуатации и устранять повторяющиеся ручные операции.',
    ],
    focusAreas: [
      {
        title: 'Infrastructure Engineering',
        description: 'Проектирование и сопровождение надёжных корпоративных серверных сред',
        icon: 'Server',
      },
      {
        title: 'Linux & Windows Administration',
        description: 'Отказоустойчивая конфигурация, безопасность и сопровождение ОС',
        icon: 'Terminal',
      },
      {
        title: 'Network Engineering',
        description: 'L2/L3 коммутация, маршрутизация, VLAN, VPN, Cisco, Eltex, LTE/PLTE',
        icon: 'Network',
      },
      {
        title: 'Virtualization',
        description: 'VMware vSphere (ESXi, vCenter, vMotion), Hyper-V, VirtualBox',
        icon: 'Boxes',
      },
      {
        title: 'Monitoring & Automation',
        description: 'Zabbix (карты, триггеры, шаблоны), Grafana, PowerShell, Bash, Cyber Backup',
        icon: 'Activity',
      },
      {
        title: 'Internal Web Development',
        description: 'Инструменты мониторинга, учёта и диагностики на React, Node.js, SQLite и Docker',
        icon: 'Code2',
      },
    ],
  },
  contacts: {
    email: 'ruslanclick@gmail.com',
    phone: '+7 920 618 7010',
    phoneFormatted: '+7 (920) 618-70-10',
    location: 'Москва, Россия',
    relocationOrTravel: 'Готов к командировкам',
  },
  // Единое место конфигурации соцсетей и внешних профилей
  socials: [
    {
      id: 'telegram',
      label: 'Telegram',
      url: '', // Добавьте ссылку при необходимости, например: https://t.me/username
      iconName: 'Send',
      isAvailable: false,
    },
    {
      id: 'github',
      label: 'GitHub',
      url: '', // Добавьте ссылку при необходимости, например: https://github.com/username
      iconName: 'Github',
      isAvailable: false,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: '', // Добавьте ссылку при необходимости
      iconName: 'Linkedin',
      isAvailable: false,
    },
  ],
};
