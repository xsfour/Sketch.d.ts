/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface OpaqueEventRef<T = any> {}
  namespace classes {
    export interface OpaqueEventRef<T = any> {  }
  }
}

declare const OpaqueEventRef: cocoa.classes.OpaqueEventRef;
