/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShapePath<T = any> extends _MSShapePath {}
  namespace classes {
    export interface MSShapePath<T = any> extends _MSShapePath {
      alloc<R = MSShapePath>(): R;
      new: <R = MSShapePath>() => R;
    }
  }
}

declare const MSShapePath: cocoa.classes.MSShapePath;
