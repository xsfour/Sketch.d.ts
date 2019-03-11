/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLocking<T = any> {}
  namespace classes {
    export interface NSLocking<T = any> {  }
  }
}

declare const NSLocking: cocoa.classes.NSLocking;
