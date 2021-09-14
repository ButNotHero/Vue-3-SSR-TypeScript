import { useStore as VuexStore } from 'vuex';
import { Store } from '@/store';

/**
 * Returns Whole Store Object
 */
export const useStore = (): Store => VuexStore() as Store;
