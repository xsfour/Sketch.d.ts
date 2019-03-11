/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXPCListenerDelegate<T = any> {}
  namespace classes {
    export interface NSXPCListenerDelegate<T = any> {  }
  }
}

declare const NSXPCListenerDelegate: cocoa.classes.NSXPCListenerDelegate;
