/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTriangleShapeAction<T = any> extends MSBaseShapeAction {
    triangleShape<R = void, P0 = unknown>(_triangleShape: P0): R;
  }
  namespace classes {
    export interface MSTriangleShapeAction<T = any> extends MSBaseShapeAction {
      alloc<R = MSTriangleShapeAction>(): R;
      new: <R = MSTriangleShapeAction>() => R;
    }
  }
}

declare const MSTriangleShapeAction: cocoa.classes.MSTriangleShapeAction;
