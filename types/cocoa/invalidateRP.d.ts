/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface invalidateRP<T = any> {}
  namespace classes {
    export interface invalidateRP<T = any> {  }
  }
}

declare const invalidateRP: cocoa.classes.invalidateRP;
