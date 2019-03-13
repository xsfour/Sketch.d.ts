/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRotatedSnapItem<T = any> extends MSSnapItem {
    setY<R = void, P0 = number>(_setY: P0): R;
    setX<R = void, P0 = number>(_setX: P0): R;
    setRectForSnapping<R = void, P0 = CGRect>(_setRectForSnapping: P0): R;
    rectForSnapping<R = CGRect>(): R;
  }
  namespace classes {
    export interface MSRotatedSnapItem<T = any> extends MSSnapItem {
      alloc<R = MSRotatedSnapItem>(): R;
      new: <R = MSRotatedSnapItem>() => R;
    }
  }
}

declare const MSRotatedSnapItem: cocoa.classes.MSRotatedSnapItem;
