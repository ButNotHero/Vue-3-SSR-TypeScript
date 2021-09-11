import { GetterTree } from 'vuex';
import { ROOT_STORE } from '@/store/constants';
import { IRootGettersTypes, IRootState, IUserData } from '../../interfaces';

export const getters: GetterTree<IRootState, IRootState> & IRootGettersTypes = {
  [ROOT_STORE.GETTERS.UPDATE_VERSION]: (state: IRootState): string => state.version,
  [ROOT_STORE.GETTERS.USER_LISTS]: (state: IRootState): IUserData[] => state.userlists,
};
