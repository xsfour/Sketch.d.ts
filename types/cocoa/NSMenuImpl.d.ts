/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMenuImpl<T = any> {}
  namespace classes {
    export interface NSMenuImpl<T = any> {  }
  }
}

declare const NSMenuImpl: cocoa.classes.NSMenuImpl;
