/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCompoundSnapItem<T = any> extends cocoa.MSSnapItem {
    setRectForSnapping<R = void, P0 = cocoa.CGRect>(_setRectForSnapping: P0): R;
    rectForSnapping<R = cocoa.CGRect>(): R;
    shouldConstrainProportions<R = boolean>(): R;
    centerYAnchor<R = unknown>(): R;
    centerXAnchor<R = unknown>(): R;
    bottomAnchor<R = unknown>(): R;
    topAnchor<R = unknown>(): R;
    rightAnchor<R = unknown>(): R;
    leftAnchor<R = unknown>(): R;
    unionRect<R = cocoa.CGRect>(): R;
    setUnionRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    relativeRects<R = cocoa.NSArray>(): R;
    setRelativeRects<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface MSCompoundSnapItem<T = any> extends cocoa.classes.MSSnapItem {
      alloc<R = MSCompoundSnapItem>(): R;
      new: <R = MSCompoundSnapItem>() => R;
    }
  }
}

declare const MSCompoundSnapItem: cocoa.classes.MSCompoundSnapItem;
