<template>
  <section>
    <h1>{{ $t('notfound') }}</h1>
    <router-link :to="{ name: 'home' }">Home</router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'index',
});
</script>

<style scoped lang="scss"></style>
