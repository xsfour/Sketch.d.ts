/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMethodSignature<T = any> {}
  namespace classes {
    export interface NSMethodSignature<T = any> {  }
  }
}

declare const NSMethodSignature: cocoa.classes.NSMethodSignature;
