<template>
  <button @click="onToggleTheme('dark-theme')">Темная тема</button>
  <button @click="onToggleTheme('light-theme')">Светлая тема</button>
  <button @click="onResetTheme">Как в системе</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTheme } from '@/use/useTheme';

export default defineComponent({
  name: 'ChangeTheme',
  setup() {
    return {
      onToggleTheme: useTheme().onToggleTheme,
      onResetTheme: useTheme().onResetTheme,
    };
  },
});
</script>

<style scoped lang="scss"></style>
