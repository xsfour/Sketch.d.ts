/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObserver<T = any> {}
  namespace classes {
    export interface NSObserver<T = any> {  }
  }
}

declare const NSObserver: cocoa.classes.NSObserver;
