/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AEDesc<T = any> {}
  namespace classes {
    export interface AEDesc<T = any> {  }
  }
}

declare const AEDesc: cocoa.classes.AEDesc;
