/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface OpaqueControlRef<T = any> {}
  namespace classes {
    export interface OpaqueControlRef<T = any> {  }
  }
}

declare const OpaqueControlRef: cocoa.classes.OpaqueControlRef;
