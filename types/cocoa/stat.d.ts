/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface stat<T = any> {}
  namespace classes {
    export interface stat<T = any> {  }
  }
}

declare const stat: cocoa.classes.stat;
