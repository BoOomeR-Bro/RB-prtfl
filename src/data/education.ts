export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  major: string;
  details?: string;
  year: string;
}

export interface TrainingItem {
  id: string;
  title: string;
  organization?: string;
  year: string;
}

export interface LanguageItem {
  language: string;
  level: string;
  badge: string;
  native?: boolean;
}

export const educationData: EducationItem[] = [
  {
    id: 'tusur',
    institution: 'Томский государственный университет систем управления и радиоэлектроники (ТУСУР)',
    degree: 'Бакалавриат',
    major: 'Программная инженерия',
    details: 'Ожидаемый год окончания: 2028',
    year: '2028 (ожидается)',
  },
  {
    id: 'ktep',
    institution: 'Калужский техникум электронных приборов',
    degree: 'Среднее профессиональное образование',
    major: 'Программирование в компьютерных системах',
    details: 'Квалификация: техник-программист',
    year: '2018',
  },
];

export const additionalTrainingData: TrainingItem[] = [
  {
    id: 'worldskills',
    title: 'Веб-дизайн и разработка',
    organization: 'WorldSkills eSim',
    year: '2018',
  },
  {
    id: 'network-tech',
    title: 'Интернет-технологии и настройка, обслуживание и эксплуатация компьютерных сетей',
    organization: 'Курс повышения квалификации',
    year: '2018',
  },
  {
    id: 'computer-operator',
    title: 'Оператор электронно-вычислительных и вычислительных машин, III разряд',
    organization: 'Профессиональное обучение',
    year: '2018',
  },
];

export const languagesData: LanguageItem[] = [
  {
    language: 'Русский',
    level: 'Родной язык',
    badge: 'Native',
    native: true,
  },
  {
    language: 'Английский',
    level: 'B2 — Выше среднего (Upper-Intermediate)',
    badge: 'B2 Professional',
    native: false,
  },
];
