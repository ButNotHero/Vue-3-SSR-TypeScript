import { onMounted, onServerPrefetch } from 'vue';

export const useSSR = (callback: any): void => {
  onMounted(async () => {
    await callback();
  });

  onServerPrefetch(async () => {
    await callback();
  });
};
