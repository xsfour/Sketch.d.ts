/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDockMiniViewController<T = any> extends NSObject {
    _frameChanged<R = void>(): R;
    _setShown<R = void, P0 = boolean>(__setShown: P0): R;
    dealloc<R = void>(): R;
    initWithView<R = unknown, P0 = unknown>(_initWithView: P0): R;
    view<R = NSView>(): R;
    setView<R = void, P0 = NSView>(_v: P0): R;
    miniViewIdentifier<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDockMiniViewController<T = any> extends NSObject {
      alloc<R = NSDockMiniViewController>(): R;
      new: <R = NSDockMiniViewController>() => R;
    }
  }
}

declare const NSDockMiniViewController: cocoa.classes.NSDockMiniViewController;
