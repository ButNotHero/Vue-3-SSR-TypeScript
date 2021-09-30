<template>
  <PageMetaTeleport />
  <ChangeLocale />
  <ChangeTheme />
  <main class="page-main">
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageMetaTeleport from '@/components/Common/Meta/PageMetaTeleport.vue';
import ChangeLocale from '@/components/ChangeLocale/index.vue';
import ChangeTheme from '@/components/ChangeTheme/index.vue';

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    PageMetaTeleport,
    ChangeLocale,
    ChangeTheme,
  },
});
</script>
