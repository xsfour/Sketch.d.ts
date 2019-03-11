/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXPCConnectionDelegate<T = any> {}
  namespace classes {
    export interface NSXPCConnectionDelegate<T = any> {  }
  }
}

declare const NSXPCConnectionDelegate: cocoa.classes.NSXPCConnectionDelegate;
