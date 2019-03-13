/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOrderOutAnimationProxyWindow<T = any> extends NSWindow {
    initWithSnapshotOfWindow<R = unknown, P0 = unknown>(_initWithSnapshotOfWindow: P0): R;
  }
  namespace classes {
    export interface _NSOrderOutAnimationProxyWindow<T = any> extends NSWindow {
      alloc<R = _NSOrderOutAnimationProxyWindow>(): R;
      new: <R = _NSOrderOutAnimationProxyWindow>() => R;
    }
  }
}
