/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUnitCoordinateSpace<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    transformForConvertingToCoordinateSpace<R = cocoa.CGAffineTransform, P0 = unknown>(_transformForConvertingToCoordinateSpace: P0): R;
    transformForConvertingFromCoordinateSpace<R = cocoa.CGAffineTransform, P0 = unknown>(_transformForConvertingFromCoordinateSpace: P0): R;
    convertVector_fromCoordinateSpace<R = cocoa.CGVector, P0 = cocoa.CGVector, P1 = unknown>(_convertVector: P0, _fromCoordinateSpace: P1): R;
    convertVector_toCoordinateSpace<R = cocoa.CGVector, P0 = cocoa.CGVector, P1 = unknown>(_convertVector: P0, _toCoordinateSpace: P1): R;
    convertRect_fromCoordinateSpace<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = unknown>(_convertRect: P0, _fromCoordinateSpace: P1): R;
    convertRect_toCoordinateSpace<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = unknown>(_convertRect: P0, _toCoordinateSpace: P1): R;
    convertPoint_fromCoordinateSpace<R = cocoa.CGPoint, P0 = cocoa.CGPoint, P1 = unknown>(_convertPoint: P0, _fromCoordinateSpace: P1): R;
    convertPoint_toCoordinateSpace<R = cocoa.CGPoint, P0 = cocoa.CGPoint, P1 = unknown>(_convertPoint: P0, _toCoordinateSpace: P1): R;
    parentCoordinateSpace<R = cocoa.MSLayerCoordinateSpace>(): R;
    setParentCoordinateSpace<R = void, P0 = cocoa.MSLayerCoordinateSpace>(_v: P0): R;
    transformForConvertingFromParentCoordinateSpace<R = cocoa.CGAffineTransform>(): R;
    transformForConvertingToParentCoordinateSpace<R = cocoa.CGAffineTransform>(): R;
    bounds<R = cocoa.CGRect>(): R;
  }
  namespace classes {
    export interface MSUnitCoordinateSpace<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSUnitCoordinateSpace>(): R;
      new: <R = MSUnitCoordinateSpace>() => R;
      convertPoint_toBounds<R = cocoa.CGPoint, P0 = cocoa.CGPoint, P1 = cocoa.CGRect>(_convertPoint: P0, _toBounds: P1): R;
      convertPoint_fromBounds<R = cocoa.CGPoint, P0 = cocoa.CGPoint, P1 = cocoa.CGRect>(_convertPoint: P0, _fromBounds: P1): R;
    }
  }
}

declare const MSUnitCoordinateSpace: cocoa.classes.MSUnitCoordinateSpace;
