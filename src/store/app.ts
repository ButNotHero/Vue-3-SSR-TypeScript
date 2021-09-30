/**
 * Используется для установки метаданных
 */

import { Store } from '@/store';
import { DynamicObject, MetaTag } from '@/interfaces';

export interface AppState extends Object {
  lang: string | string[] | undefined;
  title: string | string[] | undefined;
  titlePrefix: string | string[] | undefined;
  titlePostfix: string | string[] | undefined;
  meta: Array<MetaTag>;
  defaultMeta: Array<MetaTag>;
  links: Array<MetaTag>;
  defaultLinks: Array<MetaTag>;
}

class AppStore extends Store<AppState> {
  protected hydrate(state: DynamicObject): any {
    return (state as DynamicObject).app || this.data();
  }

  protected data(): AppState {
    return {
      lang: 'ru',
      title: 'Default Title',
      titlePrefix: '',
      titlePostfix: '',
      meta: [],
      defaultMeta: [],
      links: [],
      defaultLinks: [],
    };
  }

  set lang(lang: string | string[] | undefined) {
    this.state.lang = lang || '';
  }

  set title(title: string | string[] | undefined) {
    this.state.title = title || 'Default Title';
  }

  set titlePrefix(titlePrefix: string | string[] | undefined) {
    this.state.titlePrefix = titlePrefix || '';
  }

  set titlePostfix(titlePostfix: string | string[] | undefined) {
    this.state.titlePostfix = titlePostfix || '';
  }

  set meta(meta: Array<MetaTag>) {
    this.state.meta = [...meta];
  }

  set defaultMeta(defaultMeta: Array<MetaTag>) {
    this.state.defaultMeta = [...defaultMeta];
  }

  set links(links: Array<MetaTag>) {
    this.state.links = [...links];
  }

  set defaultLinks(defaultLinks: Array<MetaTag>) {
    this.state.defaultLinks = [...defaultLinks];
  }
}
export const appStore: AppStore = new AppStore();
