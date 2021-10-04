<template>
  <section class="aboutPage">
    <h1>{{ $t('about') }}</h1>
    <router-link :to="{ name: 'home' }">Go to home</router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'index',
});
</script>

<style scoped lang="scss">
.aboutPage {
  h1 {
    color: $color-text;
  }

  a {
    color: $color-text;
  }
}
</style>
