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
