<template>
  <title v-bind="getAttributes({})">
    {{ getHead.title }}
  </title>
  <meta v-for="(meta, i) in getHead.meta" :key="`meta-${i}`" v-bind="getAttributes(meta)" />
  <link v-for="(link, i) in getHead.links" :key="`link-${i}`" v-bind="getAttributes(link)" />
</template>

<script lang="ts">
import {
  computed, defineComponent, onMounted, nextTick,
} from 'vue';
import { isSSR } from '@/helpers';
import { HeadMeta, MetaTag } from '@/interfaces';
import { appStore } from '@/store/app';
import { useTheme } from '@/use/useTheme';

export default defineComponent({
  name: 'PageMeta',
  setup() {
    const getAttributes = (attributes: MetaTag): MetaTag => ({
      ...(isSSR() && { ssr: true }),
      ...attributes,
    });

    const getHead = computed(
      (): HeadMeta => ({
        title:
          String(appStore.getState().titlePrefix)
          + String(appStore.getState().title)
          + String(appStore.getState().titlePostfix),
        meta: [...appStore.getState().meta, ...appStore.getState().defaultMeta],
        links: [...appStore.getState().links, ...appStore.getState().defaultLinks],
      }),
    );

    onMounted(() => {
      nextTick(() => {
        Array.from(document.getElementsByTagName('head')[0].children).forEach((node: Element) => {
          if (node.getAttribute('ssr')) {
            node.remove();
          }
        });
        useTheme().onMountedThemeHook();
      });
    });

    return {
      getAttributes,
      getHead,
    };
  },
});
</script>
