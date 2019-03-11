/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverlayRenderer<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    setNeedsDisplayInRect<R = void, P0 = cocoa.CGRect>(_setNeedsDisplayInRect: P0): R;
    drawRect_context<R = void, P0 = cocoa.CGRect, P1 = unknown>(_drawRect: P0, _context: P1): R;
    hostView<R = cocoa.MSTiledRendererHostView>(): R;
    setHostView<R = void, P0 = cocoa.MSTiledRendererHostView>(_v: P0): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSOverlayRenderer<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSOverlayRenderer>(): R;
      new: <R = MSOverlayRenderer>() => R;
    }
  }
}

declare const MSOverlayRenderer: cocoa.classes.MSOverlayRenderer;
