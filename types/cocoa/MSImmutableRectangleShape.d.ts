/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableRectangleShape<T0 = void, T1 = void, T2 = void> extends _MSImmutableRectangleShape {
    isSVGRectangle<R = boolean>(): R;
  }
  namespace MSImmutableRectangleShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableRectangleShape {
      alloc<R = MSImmutableRectangleShape>(): R;
      new: <R = MSImmutableRectangleShape>() => R;
    }
  }
}

declare const MSImmutableRectangleShape: cocoa.MSImmutableRectangleShape.CLASS;
