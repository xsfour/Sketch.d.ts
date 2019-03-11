/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOwningObserver<T = any> {}
  namespace classes {
    export interface NSOwningObserver<T = any> {  }
  }
}

declare const NSOwningObserver: cocoa.classes.NSOwningObserver;
