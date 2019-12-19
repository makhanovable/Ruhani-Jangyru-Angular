import {INavData} from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Главная',
    url: '/main',
    icon: 'icon-graph'
  },
  {
    title: true,
    name: 'Контент'
  },
  {
    name: 'Модерация',
    url: '/v0/moderation',
    icon: 'cui-check',
    badge: {
      variant: 'info',
      text: 'NEW: 2'
    }
  },
  {
    name: 'Статьи',
    url: '/v0/posts',
    icon: 'icon-list'
  },
  {
    name: 'О проекте',
    url: '/v1/about',
    icon: 'cui-justify-center'
  }
];
