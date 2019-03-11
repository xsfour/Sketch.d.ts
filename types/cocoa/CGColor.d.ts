/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CGColor<T = any> {}
  namespace classes {
    export interface CGColor<T = any> {  }
  }
}

declare const CGColor: cocoa.classes.CGColor;
