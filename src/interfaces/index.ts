export interface MetaTag {
  ssr?: boolean;
  [key: string]: string | number | boolean | undefined | Promise<any>;
}

export interface HeadMeta {
  title: string;
  meta: Array<MetaTag>;
  links: Array<MetaTag>;
}

export interface DynamicObject {
  [key: string]: any;
}
