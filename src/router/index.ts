import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router';
import { isSSR } from '@/shared/misc';
import routes from '@/router/routes';

const router = createRouter({
  history: isSSR ? createMemoryHistory() : createWebHistory(),
  routes,
});

export default router;
