/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarItemOverlayTouchInterceptionView<T = any> extends cocoa.NSView {
    strictInterception<R = boolean>(): R;
    setStrictInterception<R = void, P0 = boolean>(_v: P0): R;
    touchInterceptor<R = cocoa.CDUnknownBlockType>(): R;
    setTouchInterceptor<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTouchBarItemOverlayTouchInterceptionView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSTouchBarItemOverlayTouchInterceptionView>(): R;
      new: <R = _NSTouchBarItemOverlayTouchInterceptionView>() => R;
    }
  }
}
