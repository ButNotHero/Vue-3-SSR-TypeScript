// How to use: https://dev.to/thomasfindlay/how-to-easily-sync-with-multiple-v-models-in-vue-3-using-composition-api-1pmg

import { computed, getCurrentInstance, WritableComputedRef } from 'vue';

export const useVModel = (props: never, propName: string): WritableComputedRef<string> => {
  const vm = getCurrentInstance()?.proxy || '';

  if (!vm) {
    throw new Error('vm is null');
  }

  return computed({
    get() {
      return props[propName];
    },
    set(value) {
      vm.$emit(`update:${propName}`, value);
    },
  });
};
