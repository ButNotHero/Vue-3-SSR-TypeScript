import { GetterTree } from 'vuex';
import { COUNTER_STORE } from '@/store/constants';
import { CounterGettersTypes, CounterStateTypes, IRootState } from '../../interfaces';

export const getters: GetterTree<CounterStateTypes, IRootState> & CounterGettersTypes = {
  [COUNTER_STORE.GETTERS.COUNTER_VALUE]: (state: CounterStateTypes) => state.counter || 0,
  [COUNTER_STORE.GETTERS.DOUBLED_COUNTER]: (state: CounterStateTypes) => state.counter || 0 * 2,
  [COUNTER_STORE.GETTERS.GET_ROOT_DISPATCH]: (state: CounterStateTypes) =>
    state.rootDispatch || false,
};
