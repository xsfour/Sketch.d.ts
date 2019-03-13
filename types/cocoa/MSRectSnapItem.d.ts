/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRectSnapItem<T = any> extends MSSnapItem {
    shouldConstrainProportions<R = boolean>(): R;
    setRectForSnapping<R = void, P0 = CGRect>(_setRectForSnapping: P0): R;
    rectForSnapping<R = CGRect>(): R;
    supportsResizingForSnapping<R = boolean>(): R;
    centerYAnchor<R = unknown>(): R;
    centerXAnchor<R = unknown>(): R;
    bottomAnchor<R = unknown>(): R;
    topAnchor<R = unknown>(): R;
    rightAnchor<R = unknown>(): R;
    leftAnchor<R = unknown>(): R;
    snapItemForDrawing<R = unknown>(): R;
  }
  namespace classes {
    export interface MSRectSnapItem<T = any> extends MSSnapItem {
      alloc<R = MSRectSnapItem>(): R;
      new: <R = MSRectSnapItem>() => R;
      rectSnapItemWithLayer_rect_constrainProportions<R = unknown, P0 = unknown, P1 = CGRect, P2 = boolean>(_rectSnapItemWithLayer: P0, _rect: P1, _constrainProportions: P2): R;
    }
  }
}

declare const MSRectSnapItem: cocoa.classes.MSRectSnapItem;
