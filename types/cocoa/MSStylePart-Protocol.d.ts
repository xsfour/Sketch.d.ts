/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStylePartProtocol<T = any> {
    isEnabled<R = boolean>(): R;
  }
  namespace classes {
    export interface MSStylePartProtocol<T = any> {  }
  }
}

declare const MSStylePartProtocol: cocoa.classes.MSStylePartProtocol;
