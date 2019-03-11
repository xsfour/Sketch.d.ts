/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBlock<T = any> {}
  namespace classes {
    export interface NSBlock<T = any> {  }
  }
}

declare const NSBlock: cocoa.classes.NSBlock;
