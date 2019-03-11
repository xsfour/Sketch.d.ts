/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRulerCoordinateSpace<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    transformForConvertingToCoordinateSpace<R = cocoa.CGAffineTransform, P0 = unknown>(_transformForConvertingToCoordinateSpace: P0): R;
    transformForConvertingFromCoordinateSpace<R = cocoa.CGAffineTransform, P0 = unknown>(_transformForConvertingFromCoordinateSpace: P0): R;
    convertVector_fromCoordinateSpace<R = cocoa.CGVector, P0 = cocoa.CGVector, P1 = unknown>(_convertVector: P0, _fromCoordinateSpace: P1): R;
    convertVector_toCoordinateSpace<R = cocoa.CGVector, P0 = cocoa.CGVector, P1 = unknown>(_convertVector: P0, _toCoordinateSpace: P1): R;
    convertRect_fromCoordinateSpace<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = unknown>(_convertRect: P0, _fromCoordinateSpace: P1): R;
    convertRect_toCoordinateSpace<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = unknown>(_convertRect: P0, _toCoordinateSpace: P1): R;
    convertPoint_fromCoordinateSpace<R = cocoa.CGPoint, P0 = cocoa.CGPoint, P1 = unknown>(_convertPoint: P0, _fromCoordinateSpace: P1): R;
    convertPoint_toCoordinateSpace<R = cocoa.CGPoint, P0 = cocoa.CGPoint, P1 = unknown>(_convertPoint: P0, _toCoordinateSpace: P1): R;
    initWithLayer<R = unknown, P0 = unknown>(_initWithLayer: P0): R;
    layer<R = cocoa.MSRootLayer>(): R;
    transformForConvertingFromParentCoordinateSpace<R = cocoa.CGAffineTransform>(): R;
    transformForConvertingToParentCoordinateSpace<R = cocoa.CGAffineTransform>(): R;
    parentCoordinateSpace<R = cocoa.MSLayerCoordinateSpace>(): R;
    bounds<R = cocoa.CGRect>(): R;
  }
  namespace classes {
    export interface MSRulerCoordinateSpace<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSRulerCoordinateSpace>(): R;
      new: <R = MSRulerCoordinateSpace>() => R;
    }
  }
}

declare const MSRulerCoordinateSpace: cocoa.classes.MSRulerCoordinateSpace;
