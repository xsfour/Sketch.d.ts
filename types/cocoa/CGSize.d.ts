/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CGSize<T = any> {}
  namespace classes {
    export interface CGSize<T = any> {  }
  }
}

declare const CGSize: cocoa.classes.CGSize;
