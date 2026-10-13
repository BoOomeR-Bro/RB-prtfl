export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { id: 'about', label: 'Обо мне', href: '#about' },
  { id: 'competencies', label: 'Компетенции', href: '#competencies' },
  { id: 'experience', label: 'Опыт', href: '#experience' },
  { id: 'projects', label: 'Проекты', href: '#projects' },
  { id: 'education', label: 'Образование', href: '#education' },
  { id: 'contacts', label: 'Контакты', href: '#contacts' },
];
