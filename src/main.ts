import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from '@/plugins/i18n/vue-i18n';

import './assets/scss/styles.scss';

const app = createApp(App).use(store).use(router).use(i18n);

app.mount('#app');
