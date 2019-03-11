/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStarShape<T = any> extends cocoa._MSStarShape {
    canFlatten<R = boolean>(): R;
    inspectorSections<R = unknown>(): R;
  }
  namespace classes {
    export interface MSStarShape<T = any> extends cocoa.classes._MSStarShape {
      alloc<R = MSStarShape>(): R;
      new: <R = MSStarShape>() => R;
    }
  }
}

declare const MSStarShape: cocoa.classes.MSStarShape;
