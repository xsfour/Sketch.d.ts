/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface OpaqueWindowPtr<T = any> {}
  namespace classes {
    export interface OpaqueWindowPtr<T = any> {  }
  }
}

declare const OpaqueWindowPtr: cocoa.classes.OpaqueWindowPtr;
