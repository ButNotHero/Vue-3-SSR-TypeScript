import { state } from '@/store/modules/root/state';

export const rootState = {
  namespaced: true,
  state: {
    ...state,
  },
};
