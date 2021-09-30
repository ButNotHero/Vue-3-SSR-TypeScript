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
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import i18n from '@/plugins/i18n/vue-i18n';
import { LS_LOCALE } from '../../../env.common';
import { useSSR } from '@/use/useSSR';

export default defineComponent({
  name: 'ChangeLocale',
  setup() {
    const route = useRoute();

    const getLocales = computed(() => {
      const locales: string[] = [];

      Object.keys(i18n.global.messages).forEach((locale) => {
        locales.push(String(locale));
      });

      return locales;
    });

    const updateLocale = (locale: string) => {
      const _locale = locale.toLowerCase();
      window.location.href = `/${_locale}${route.fullPath.slice(3)}`;
      localStorage.setItem(LS_LOCALE, _locale);
    };

    const initAppLocale = () => {
      i18n.global.locale = String(route.params.locale);
      // TODO: Make it work for SSR
      // if (typeof window !== 'undefined') {
      //   i18n.global.locale = localStorage.getItem(LS_LOCALE) || 'ru';
      // }
    };

    useSSR(() => {
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
    padding: 0;
    list-style: none;

    li {
      margin-right: 20px;
    }
  }
}
</style>
