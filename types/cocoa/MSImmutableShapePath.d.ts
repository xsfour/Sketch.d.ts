/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableShapePath<T = any> extends _MSImmutableShapePath {}
  namespace classes {
    export interface MSImmutableShapePath<T = any> extends _MSImmutableShapePath {
      alloc<R = MSImmutableShapePath>(): R;
      new: <R = MSImmutableShapePath>() => R;
    }
  }
}

declare const MSImmutableShapePath: cocoa.classes.MSImmutableShapePath;
