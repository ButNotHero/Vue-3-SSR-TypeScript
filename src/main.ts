import { createApp, createSSRApp, h } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import i18n from '@/plugins/i18n/vue-i18n';

import './assets/scss/styles.scss';

export default function (): any {
  const isSSR = typeof window === 'undefined';

  const rootComponent = {
    render: () => h(App),
    components: { App },
  };

  const app = (isSSR ? createSSRApp : createApp)(rootComponent);

  app.use(router);
  app.use(store);
  app.use(i18n);

  return {
    app,
    router,
    store,
  };
}
