/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSApplicationDelegate<T = any> {}
  namespace classes {
    export interface NSApplicationDelegate<T = any> {  }
  }
}

declare const NSApplicationDelegate: cocoa.classes.NSApplicationDelegate;
