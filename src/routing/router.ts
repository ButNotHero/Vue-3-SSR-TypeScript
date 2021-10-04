import {
  createMemoryHistory, createRouter, createWebHistory, Router,
} from 'vue-router';
import { isSSR } from '@/helpers';
import { routes } from './routes';
import { LS_LOCALE } from '../../env.common';
import i18n from '@/plugins/i18n/vue-i18n';

const router = createRouter({
  history: isSSR() ? createMemoryHistory() : createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  let { locale } = to.params;

  if (!locale || !['ru', 'en'].includes(String(locale))) {
    if (isSSR()) {
      locale = 'ru';
    } else {
      locale = localStorage.getItem(LS_LOCALE) || 'ru';
    }

    i18n.global.locale = String(locale);

    if (!['ru', 'en'].includes(String(locale))) {
      return next(`/${locale}/`);
    }

    return next(`/${locale}${to.fullPath}`);
  }

  i18n.global.locale = String(locale);

  return next();
});

export function createApplicationRouter(): Router {
  return router;
}
