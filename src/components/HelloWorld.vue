<template>
  <div class="hello-world">
    <div class="hello-world__container">
      <label>counter from state: {{ counterTemp }}</label>
      <label>counter from getters: {{ counter }}</label>
      <label>doubledCounter: {{ doubledCounter }}</label>
      <label>isRootDispatchSet: {{ isRootDispatchSet }}</label>
      <button @click="getCounter">Increment Counter</button>
      <button @click="resetCounter">Reset Counter</button>
      <button @click="setRootDispatch">Root Dispatch</button>
      <button @click="crossCounterDispatch">Cross Counter Dispatch</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/use/useStore';
import { CounterStateTypes } from '@/store/interfaces';
import { COUNTER1_STORE, COUNTER_STORE, ROOT_STORE } from '@/store/constants';

export default defineComponent({
  name: 'CompositionAPIComponent',
  setup() {
    const store = useStore();
    const counter = computed(() => store.getters[COUNTER_STORE.GETTERS.COUNTER_VALUE]);
    const counterTemp = computed(
      () => (store.state.counterModule as unknown as CounterStateTypes).counter,
    );
    const doubledCounter = computed(() => store.getters[COUNTER_STORE.GETTERS.DOUBLED_COUNTER]);
    const isRootDispatchSet = computed(
      () => store.getters[COUNTER_STORE.GETTERS.GET_ROOT_DISPATCH],
    );

    const resetCounter = () => {
      store.commit(COUNTER_STORE.MUTATIONS.RESET_COUNTER);
    };

    const setRootDispatch = () => {
      store.dispatch(ROOT_STORE.ACTIONS.COUNTER_CHECK, !isRootDispatchSet.value);
    };

    const getCounter = async () => {
      await store.dispatch(COUNTER_STORE.ACTIONS.GET_COUNTER, 100);
    };

    const crossCounterDispatch = () => {
      store.dispatch(COUNTER1_STORE.ACTIONS.CALL_COUNTER1);
    };

    return {
      counter,
      doubledCounter,
      resetCounter,
      getCounter,
      setRootDispatch,
      isRootDispatchSet,
      crossCounterDispatch,
      counterTemp,
    };
  },
});
</script>

<style scoped lang="scss">
.hello-world {
  &__container {
    display: flex;
    flex-direction: column;
    max-width: 200px;
  }

  label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  button {
    max-width: 150px;
    margin-bottom: 5px;
    padding: 4px 6px;
  }
}
</style>
