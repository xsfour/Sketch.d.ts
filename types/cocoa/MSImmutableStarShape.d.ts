/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableStarShape<T = any> extends _MSImmutableStarShape {}
  namespace classes {
    export interface MSImmutableStarShape<T = any> extends _MSImmutableStarShape {
      alloc<R = MSImmutableStarShape>(): R;
      new: <R = MSImmutableStarShape>() => R;
    }
  }
}

declare const MSImmutableStarShape: cocoa.classes.MSImmutableStarShape;
