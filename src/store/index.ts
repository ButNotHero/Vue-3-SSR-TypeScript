import { reactive, readonly } from 'vue';
import { createStore } from 'vuex';
import { isSSR } from '@/helpers';
import { rootState } from '@/store/modules/root';
import { DynamicObject } from '@/interfaces';

export abstract class Store<T extends DynamicObject> {
  protected state: T;

  constructor() {
    const data = isSSR() ? this.data() : this.hydrate((window as DynamicObject).__STATE__ || {});

    this.state = reactive(data) as T;
  }

  protected abstract hydrate(state: DynamicObject): T;

  protected abstract data(): T;

  public getState(): T {
    return readonly(this.state) as T;
  }
}

export const store = createStore(rootState);
