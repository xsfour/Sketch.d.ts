/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _TtC6Sketch20MSResizePreviewLayer<T = any> extends cocoa.CALayer {
    cxx_destruct<R = cocoa.CDUnknownBlockType>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    initWithLayer<R = unknown, P0 = unknown>(_initWithLayer: P0): R;
    init<R = unknown>(): R;
    layoutSublayers<R = void>(): R;
    display<R = void>(): R;
    scale<R = number>(): R;
    setScale<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _TtC6Sketch20MSResizePreviewLayer<T = any> extends cocoa.classes.CALayer {
      needsDisplayForKey<R = boolean, P0 = unknown>(_needsDisplayForKey: P0): R;
    }
  }
}
