/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MTLCommandBuffer<T = any> {}
  namespace classes {
    export interface MTLCommandBuffer<T = any> {  }
  }
}

declare const MTLCommandBuffer: cocoa.classes.MTLCommandBuffer;
