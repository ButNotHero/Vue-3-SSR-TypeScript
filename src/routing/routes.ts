const withPrefix = (prefix, routes) =>
  routes.map((route) => {
    route.path = prefix + route.path;
    return route;
  });

export const routes = [
  ...withPrefix('/:locale/', [
    {
      path: '',
      name: 'home',
      component: () => import('../views/Home/index.vue'),
    },
    {
      path: 'about',
      name: 'about',
      component: () => import('../views/About/index.vue'),
    },
    {
      path: '404',
      name: '404',
      component: () => import('../views/Invalid/404/index.vue'),
    },
    {
      path: ':pathMatch(.*)*',
      redirect: {
        name: '404',
      },
    },
  ]),
  // {
  //   path: '/:pathMatch(.*)*',
  //   redirect: {
  //     name: '404',
  //   },
  // },
];
