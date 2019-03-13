/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRoundedRectangleShapeAction<T = any> extends MSBaseShapeAction {
    roundedRectangleShape<R = void, P0 = unknown>(_roundedRectangleShape: P0): R;
  }
  namespace classes {
    export interface MSRoundedRectangleShapeAction<T = any> extends MSBaseShapeAction {
      alloc<R = MSRoundedRectangleShapeAction>(): R;
      new: <R = MSRoundedRectangleShapeAction>() => R;
    }
  }
}

declare const MSRoundedRectangleShapeAction: cocoa.classes.MSRoundedRectangleShapeAction;
