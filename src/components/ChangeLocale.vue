<template>
  <div class="change-locale">
    <ul>
      <li v-for="locale of getLocales" :key="locale">
        <button @click="updateLocale(locale)">{{ locale.toUpperCase() }}</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent, onMounted, onServerPrefetch,
} from 'vue';
import i18n from '@/plugins/i18n/vue-i18n';
import { LS_LOCALE } from '../../env.common';

export default defineComponent({
  name: 'ChangeLocale',
  setup() {
    const getLocales = computed(() => {
      const locales: string[] = [];

      Object.keys(i18n.global.messages).forEach((locale) => {
        locales.push(String(locale));
      });

      return locales;
    });

    const updateLocale = (locale: string) => {
      const _locale = locale.toLowerCase();
      i18n.global.locale = _locale;
      localStorage.setItem(LS_LOCALE, _locale);
    };

    const initAppLocale = () => {
      // TODO: Make it work for SSR
      if (typeof window !== 'undefined') {
        i18n.global.locale = localStorage.getItem(LS_LOCALE) || 'ru';
      }
    };

    onMounted(() => {
      initAppLocale();
    });

    onServerPrefetch(() => {
      initAppLocale();
    });

    return {
      getLocales,
      updateLocale,
    };
  },
});
</script>

<style scoped lang="scss">
.change-locale {
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      margin-right: 20px;
    }
  }
}
</style>
