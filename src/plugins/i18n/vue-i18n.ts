import { createI18n } from 'vue-i18n';
import ru from '@/langs/ru-RU';
import en from '@/langs/en-US';

const messages = {
  ru,
  en,
};

const i18n = createI18n({
  locale: 'ru',
  messages,
});

export default i18n;
