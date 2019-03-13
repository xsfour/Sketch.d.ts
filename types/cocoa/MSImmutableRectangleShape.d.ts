/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableRectangleShape<T = any> extends _MSImmutableRectangleShape {
    isSVGRectangle<R = boolean>(): R;
  }
  namespace classes {
    export interface MSImmutableRectangleShape<T = any> extends _MSImmutableRectangleShape {
      alloc<R = MSImmutableRectangleShape>(): R;
      new: <R = MSImmutableRectangleShape>() => R;
    }
  }
}

declare const MSImmutableRectangleShape: cocoa.classes.MSImmutableRectangleShape;
