<template>
  <header class="page-header container">
    <h3>Header</h3>
    <ChangeLocale />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChangeLocale from '@/components/ChangeLocale.vue';

export default defineComponent({
  name: 'PageHeader',
  components: { ChangeLocale },
});
</script>

<style scoped lang="scss"></style>
