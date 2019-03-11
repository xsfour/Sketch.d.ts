/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface JSContext<T = any> {}
  namespace classes {
    export interface JSContext<T = any> {  }
  }
}

declare const JSContext: cocoa.classes.JSContext;
