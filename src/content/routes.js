import { faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const userRoutes = [
  { href: '/', title: 'Home' },
  { href: '/about', title: 'About' },
];

export const adminRoutes = [
  {
    href: '/admin',
    title: 'Sentiment Analysis',
    icon: faHeart,
  },
  {
    href: '/admin/text-mining',
    title: 'Text Mining',
    icon: faMagnifyingGlass,
  },
];
