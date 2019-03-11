/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableTriangleShape<T = any> extends cocoa._MSImmutableTriangleShape {}
  namespace classes {
    export interface MSImmutableTriangleShape<T = any> extends cocoa.classes._MSImmutableTriangleShape {
      alloc<R = MSImmutableTriangleShape>(): R;
      new: <R = MSImmutableTriangleShape>() => R;
    }
  }
}

declare const MSImmutableTriangleShape: cocoa.classes.MSImmutableTriangleShape;
