/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBorderlessLayerTreeProjectionWindow<T = any> extends NSWindow {
    initWithContentRect<R = unknown, P0 = CGRect>(_initWithContentRect: P0): R;
    rootLayer<R = CALayer>(): R;
  }
  namespace classes {
    export interface _NSBorderlessLayerTreeProjectionWindow<T = any> extends NSWindow {
      alloc<R = _NSBorderlessLayerTreeProjectionWindow>(): R;
      new: <R = _NSBorderlessLayerTreeProjectionWindow>() => R;
    }
  }
}
