/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBorderlessLayerTreeProjectionWindow<T = any> extends cocoa.NSWindow {
    initWithContentRect<R = unknown, P0 = cocoa.CGRect>(_initWithContentRect: P0): R;
    rootLayer<R = cocoa.CALayer>(): R;
  }
  namespace classes {
    export interface _NSBorderlessLayerTreeProjectionWindow<T = any> extends cocoa.classes.NSWindow {
      alloc<R = _NSBorderlessLayerTreeProjectionWindow>(): R;
      new: <R = _NSBorderlessLayerTreeProjectionWindow>() => R;
    }
  }
}
