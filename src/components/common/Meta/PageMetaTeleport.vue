<template>
  <teleport to="head">
    <PageMeta />
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageMeta from '@/components/Common/Meta/PageMeta.vue';

export default defineComponent({
  name: 'PageMetaTeleport',
  components: {
    PageMeta,
  },
});
</script>
