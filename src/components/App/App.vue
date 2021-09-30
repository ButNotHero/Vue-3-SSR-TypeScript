<template>
  <component :is="getLayout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import DefaultLayout from '@/layouts/Default.vue';

export default defineComponent({
  name: 'App',
  setup() {
    const route = useRoute();

    const getLayout = computed(() => route.meta.layout || DefaultLayout);

    return {
      getLayout,
    };
  },
});
</script>
