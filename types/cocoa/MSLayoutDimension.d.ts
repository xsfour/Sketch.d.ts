/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayoutDimension<T = any> extends MSLayoutAnchor {}
  namespace classes {
    export interface MSLayoutDimension<T = any> extends MSLayoutAnchor {
      alloc<R = MSLayoutDimension>(): R;
      new: <R = MSLayoutDimension>() => R;
    }
  }
}

declare const MSLayoutDimension: cocoa.classes.MSLayoutDimension;
