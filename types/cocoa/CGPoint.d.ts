/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CGPoint<T = any> {}
  namespace classes {
    export interface CGPoint<T = any> {  }
  }
}

declare const CGPoint: cocoa.classes.CGPoint;
