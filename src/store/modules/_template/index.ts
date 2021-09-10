import { state } from '@/store/modules/_template/state';
import { actions } from '@/store/modules/_template/actions';
import { mutations } from '@/store/modules/_template/mutations';
import { getters } from '@/store/modules/_template/getters';

export const _templateStore = {
  namespaced: true,
  state: {
    ...state,
  },
  actions: {
    ...actions,
  },
  mutations: {
    ...mutations,
  },
  getters: {
    ...getters,
  },
};
