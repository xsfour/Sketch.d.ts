/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _TtC6Sketch14MSRotationItem<T = any> extends cocoa.NSObject {
    cxx_destruct<R = cocoa.CDUnknownBlockType>(): R;
    setAnchorPointWithLocation_inLayer<R = void, P0 = cocoa.CGPoint, P1 = unknown>(_setAnchorPointWithLocation: P0, _inLayer: P1): R;
    initWithLayer<R = unknown, P0 = unknown>(_initWithLayer: P0): R;
    initialRotation<R = number>(): R;
    setInitialRotation<R = void, P0 = number>(_v: P0): R;
    anchorPoint<R = cocoa.CGPoint>(): R;
    setAnchorPoint<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    layer<R = cocoa.MSLayer>(): R;
  }
  namespace classes {
    export interface _TtC6Sketch14MSRotationItem<T = any> extends cocoa.classes.NSObject {
      alloc<R = _TtC6Sketch14MSRotationItem>(): R;
      new: <R = _TtC6Sketch14MSRotationItem>() => R;
    }
  }
}
