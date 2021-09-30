import { createApp, createSSRApp } from 'vue';
import { Router } from 'vue-router';
import { createApplicationRouter } from './routing/router';
import { isSSR } from '@/helpers';
import App from './components/App/App.vue';
import PageMeta from './components/Common/Meta/PageMeta.vue';
import PageMetaTeleport from './components/Common/Meta/PageMetaTeleport.vue';
import { store } from '@/store';
import i18n from '@/plugins/i18n/vue-i18n';

import './assets/scss/styles.scss';

export function createApplication() {
  const app = isSSR() ? createSSRApp(App) : createApp(App);

  const router: Router = createApplicationRouter();

  app.use(router);
  app.use(store);
  app.use(i18n);

  app.component('PageMeta', PageMeta);
  app.component('PageMetaTeleport', PageMetaTeleport);

  return { app, router, store };
}
