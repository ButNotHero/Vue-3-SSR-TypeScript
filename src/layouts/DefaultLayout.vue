<template>
  <PageHeader />
  <main class="page-main">
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageHeader from '@/components/common/pageHeader/PageHeader.vue';

export default defineComponent({
  name: 'DefaultLayout',
  components: { PageHeader },
});
</script>
