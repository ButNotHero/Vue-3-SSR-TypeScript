import { getCurrentInstance } from 'vue';
import { Emitter } from 'mitt';

export const useEmitter = (): Emitter<never> => {
  const internalInstance: any = getCurrentInstance();

  const { emitter } = internalInstance.appContext.config.globalProperties;

  return emitter;
};
