/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarItemOverlayTouchInterceptionView<T = any> extends NSView {
    strictInterception<R = boolean>(): R;
    setStrictInterception<R = void, P0 = boolean>(_v: P0): R;
    touchInterceptor<R = CDUnknownBlockType>(): R;
    setTouchInterceptor<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTouchBarItemOverlayTouchInterceptionView<T = any> extends NSView {
      alloc<R = _NSTouchBarItemOverlayTouchInterceptionView>(): R;
      new: <R = _NSTouchBarItemOverlayTouchInterceptionView>() => R;
    }
  }
}
