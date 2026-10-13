export interface CompetencyCategory {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  skills: string[];
}

export const competencyCategories: CompetencyCategory[] = [
  {
    id: 'os',
    title: 'Операционные системы',
    shortDesc: 'Серверные и корпоративные дистрибутивы Linux и Windows',
    iconName: 'Terminal',
    skills: [
      'Ubuntu Server',
      'Debian',
      'CentOS',
      'Astra Linux',
      'РЕД ОС',
      'Windows Server',
    ],
  },
  {
    id: 'virtualization',
    title: 'Виртуализация',
    shortDesc: 'Кластеризация, распределение ресурсов и гипервизоры',
    iconName: 'Boxes',
    skills: [
      'VMware vSphere',
      'vCenter',
      'ESXi',
      'Кластеризация',
      'vMotion',
      'Распределение ресурсов',
      'Hyper-V',
      'VirtualBox',
    ],
  },
  {
    id: 'networks',
    title: 'Сети и телекоммуникации',
    shortDesc: 'Сетевая архитектура, маршрутизация, коммутация и каналы связи',
    iconName: 'Network',
    skills: [
      'Cisco IOS / IOS XE',
      'Eltex',
      'L2/L3',
      'VLAN',
      'STP',
      'Агрегация каналов',
      'Маршрутизация',
      'Cisco Wireless',
      'VPN',
      'SSH',
      'LTE / PLTE',
    ],
  },
  {
    id: 'monitoring-backup',
    title: 'Мониторинг и резервное копирование',
    shortDesc: 'Контроль доступности сервисов, метрики и сохранность данных',
    iconName: 'Activity',
    skills: [
      'Zabbix',
      'Шаблоны мониторинга',
      'Карты сети',
      'Триггеры',
      'Пользовательские скрипты',
      'Grafana',
      'Cyber Backup',
    ],
  },
  {
    id: 'devops-operations',
    title: 'DevOps и эксплуатация',
    shortDesc: 'Контейнеризация, веб-серверы, маршрутизация запросов и автоматизация',
    iconName: 'Cpu',
    skills: [
      'Docker',
      'Docker Compose',
      'Nginx',
      'Apache',
      'systemd',
      'Reverse Proxy',
      'API Routing',
      'PowerShell',
    ],
  },
  {
    id: 'development',
    title: 'Разработка сервисов',
    shortDesc: 'Создание специализированных веб-инструментов автоматизации',
    iconName: 'Code2',
    skills: [
      'React 18',
      'Vite 4',
      'Tailwind CSS 3',
      'Axios',
      'XTerm.js',
      'Node.js 18',
      'Express 4',
      'SQLite3',
      'ssh2',
    ],
  },
  {
    id: 'enterprise-services',
    title: 'Корпоративные сервисы',
    shortDesc: 'Доменная инфраструктура, коммуникации и регламенты ITIL',
    iconName: 'ShieldCheck',
    skills: [
      'Active Directory',
      'Exchange',
      'SCCM',
      'RDP',
      'IP-телефония',
      'АТС',
      'ITSM',
      'ITIL',
    ],
  },
];
