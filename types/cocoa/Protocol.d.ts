/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface Protocol<T = any> {}
  namespace classes {
    export interface Protocol<T = any> {  }
  }
}

declare const Protocol: cocoa.classes.Protocol;
