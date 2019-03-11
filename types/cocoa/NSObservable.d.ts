/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObservable<T = any> {}
  namespace classes {
    export interface NSObservable<T = any> {  }
  }
}

declare const NSObservable: cocoa.classes.NSObservable;
