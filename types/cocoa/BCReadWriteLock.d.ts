/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCReadWriteLock<T = any> {}
  namespace classes {
    export interface BCReadWriteLock<T = any> {  }
  }
}

declare const BCReadWriteLock: cocoa.classes.BCReadWriteLock;
