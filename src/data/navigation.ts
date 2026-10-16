export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { id: 'experience', label: 'Опыт работы', href: '#experience' },
  { id: 'competencies', label: 'Компетенции', href: '#competencies' },
  { id: 'projects', label: 'Рабочие кейсы', href: '#projects' },
  { id: 'education', label: 'Образование', href: '#education' },
  { id: 'about', label: 'Подход', href: '#about' },
  { id: 'contacts', label: 'Контакты', href: '#contacts' },
];
