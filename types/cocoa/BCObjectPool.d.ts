/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCObjectPool<T = any> {}
  namespace classes {
    export interface BCObjectPool<T = any> {  }
  }
}

declare const BCObjectPool: cocoa.classes.BCObjectPool;
