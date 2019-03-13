/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRectangleShapeAction<T = any> extends MSBaseShapeAction {
    rectangleShape<R = void, P0 = unknown>(_rectangleShape: P0): R;
  }
  namespace classes {
    export interface MSRectangleShapeAction<T = any> extends MSBaseShapeAction {
      alloc<R = MSRectangleShapeAction>(): R;
      new: <R = MSRectangleShapeAction>() => R;
    }
  }
}

declare const MSRectangleShapeAction: cocoa.classes.MSRectangleShapeAction;
