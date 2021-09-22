import { createApp, createSSRApp, h } from 'vue';
import { Router } from 'vue-router';
import { Store } from 'vuex';
import mitt from 'mitt';
import { IRootState } from '@/store/interfaces';
import App from './App.vue';
import router from './router';
import { store } from './store';
import i18n from '@/plugins/i18n/vue-i18n';

import './assets/scss/styles.scss';

const emitter = mitt();

// eslint-disable-next-line
export default function (): { app: any; router: Router; store: Store<IRootState> } {
  const isSSR = typeof window === 'undefined';

  const rootComponent = {
    render: () => h(App),
    components: { App },
  };

  const app = (isSSR ? createSSRApp : createApp)(rootComponent);

  app.use(router);
  app.use(store);
  app.use(i18n);

  app.config.globalProperties.emitter = emitter;

  return {
    app,
    router,
    store,
  };
}
