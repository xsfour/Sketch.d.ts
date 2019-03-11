/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CGRect<T = any> {}
  namespace classes {
    export interface CGRect<T = any> {  }
  }
}

declare const CGRect: cocoa.classes.CGRect;
