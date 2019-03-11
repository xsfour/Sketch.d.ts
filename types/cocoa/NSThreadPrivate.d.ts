/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSThreadPrivate<T = any> {}
  namespace classes {
    export interface NSThreadPrivate<T = any> {  }
  }
}

declare const NSThreadPrivate: cocoa.classes.NSThreadPrivate;
