export const routes = [
  {
    path: '/:locale',
    name: 'home',
    component: () => import('../views/Home/index.vue'),
  },
  { path: '/:catchAll(.*)', redirect: '/ru' },
];
