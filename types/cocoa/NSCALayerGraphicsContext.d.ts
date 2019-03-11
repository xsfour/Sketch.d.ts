/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCALayerGraphicsContext<T = any> extends cocoa.NSWindowGraphicsContext {
    _initWithGraphicsPort_CALayer_flipped<R = unknown, P0 = void, P1 = unknown, P2 = boolean>(__initWithGraphicsPort: P0, _CALayer: P1, _flipped: P2): R;
  }
  namespace classes {
    export interface NSCALayerGraphicsContext<T = any> extends cocoa.classes.NSWindowGraphicsContext {
      alloc<R = NSCALayerGraphicsContext>(): R;
      new: <R = NSCALayerGraphicsContext>() => R;
    }
  }
}

declare const NSCALayerGraphicsContext: cocoa.classes.NSCALayerGraphicsContext;
