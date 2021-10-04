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
      localStorage.setItem(LS_LOCALE, _locale);
      window.location.href = `/${_locale}${route.fullPath.slice(3)}`;
    };

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
