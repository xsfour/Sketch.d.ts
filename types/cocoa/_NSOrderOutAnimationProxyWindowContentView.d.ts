/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOrderOutAnimationProxyWindowContentView<T = any> extends NSView {
    setSnapshot<R = void, P0 = unknown>(_setSnapshot: P0): R;
  }
  namespace classes {
    export interface _NSOrderOutAnimationProxyWindowContentView<T = any> extends NSView {
      alloc<R = _NSOrderOutAnimationProxyWindowContentView>(): R;
      new: <R = _NSOrderOutAnimationProxyWindowContentView>() => R;
    }
  }
}
