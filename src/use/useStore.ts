import { useStore as VuexStore } from 'vuex';
import { Store } from '@/store';

/**
 * Returns Whole Store Object
 */
export function useStore(): Store {
  return VuexStore() as Store;
}
