/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSControlStripTouchBarItem<T = any> extends cocoa.NSCustomTouchBarItem {
    maxSize<R = cocoa.CGSize>(): R;
    setMaxSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    preferredSize<R = cocoa.CGSize>(): R;
    setPreferredSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    minSize<R = cocoa.CGSize>(): R;
    setMinSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
  }
  namespace classes {
    export interface _NSControlStripTouchBarItem<T = any> extends cocoa.classes.NSCustomTouchBarItem {
      alloc<R = _NSControlStripTouchBarItem>(): R;
      new: <R = _NSControlStripTouchBarItem>() => R;
    }
  }
}
