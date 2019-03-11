/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableRectangleShape<T = any> extends cocoa._MSImmutableRectangleShape {
    isSVGRectangle<R = boolean>(): R;
  }
  namespace classes {
    export interface MSImmutableRectangleShape<T = any> extends cocoa.classes._MSImmutableRectangleShape {
      alloc<R = MSImmutableRectangleShape>(): R;
      new: <R = MSImmutableRectangleShape>() => R;
    }
  }
}

declare const MSImmutableRectangleShape: cocoa.classes.MSImmutableRectangleShape;
