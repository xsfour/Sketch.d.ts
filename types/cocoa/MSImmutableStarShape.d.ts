/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableStarShape<T = any> extends cocoa._MSImmutableStarShape {}
  namespace classes {
    export interface MSImmutableStarShape<T = any> extends cocoa.classes._MSImmutableStarShape {
      alloc<R = MSImmutableStarShape>(): R;
      new: <R = MSImmutableStarShape>() => R;
    }
  }
}

declare const MSImmutableStarShape: cocoa.classes.MSImmutableStarShape;
