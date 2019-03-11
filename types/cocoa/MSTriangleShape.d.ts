/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTriangleShape<T = any> extends cocoa._MSTriangleShape {
    canFlatten<R = boolean>(): R;
  }
  namespace classes {
    export interface MSTriangleShape<T = any> extends cocoa.classes._MSTriangleShape {
      alloc<R = MSTriangleShape>(): R;
      new: <R = MSTriangleShape>() => R;
    }
  }
}

declare const MSTriangleShape: cocoa.classes.MSTriangleShape;
