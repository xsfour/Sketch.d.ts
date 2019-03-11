/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MTLCommandQueue<T = any> {}
  namespace classes {
    export interface MTLCommandQueue<T = any> {  }
  }
}

declare const MTLCommandQueue: cocoa.classes.MTLCommandQueue;
