/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAffineTransform<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol, cocoa.NSSecureCodingProtocol {
    debugDescription<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    transformSize<R = cocoa.CGSize, P0 = cocoa.CGSize>(_transformSize: P0): R;
    transformPoint<R = cocoa.CGPoint, P0 = cocoa.CGPoint>(_transformPoint: P0): R;
    prependTransform<R = void, P0 = unknown>(_prependTransform: P0): R;
    appendTransform<R = void, P0 = unknown>(_appendTransform: P0): R;
    invert<R = void>(): R;
    scaleXBy_yBy<R = void, P0 = number, P1 = number>(_scaleXBy: P0, _yBy: P1): R;
    scaleBy<R = void, P0 = number>(_scaleBy: P0): R;
    rotateByRadians<R = void, P0 = number>(_rotateByRadians: P0): R;
    rotateByDegrees<R = void, P0 = number>(_rotateByDegrees: P0): R;
    translateXBy_yBy<R = void, P0 = number, P1 = number>(_translateXBy: P0, _yBy: P1): R;
    hash<R = number>(): R;
    initWithTransform<R = unknown, P0 = unknown>(_initWithTransform: P0): R;
    transformStruct<R = unknown>(): R;
    setTransformStruct<R = void, P0 = unknown>(_v: P0): R;
    // + NSAffineTransform(NSAppKitAdditions,NSAppKitAdditionsPrivate,CHAffineTransform_Additions):
    concat<R = void>(): R;
    set<R = void>(): R;
    transformBezierPath<R = unknown, P0 = unknown>(_transformBezierPath: P0): R;
    CGAffineTransform_ms<R = cocoa.CGAffineTransform>(): R;
    invertedTransform<R = unknown>(): R;
    transactionWithBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_transactionWithBlock: P0): R;
    rotateWithDegrees_aroundPoint<R = void, P0 = number, P1 = cocoa.CGPoint>(_rotateWithDegrees: P0, _aroundPoint: P1): R;
    translateByOffset<R = void, P0 = cocoa.CGPoint>(_translateByOffset: P0): R;
    CGAffineTransform<R = cocoa.CGAffineTransform>(): R;
    setCGAffineTransform<R = void, P0 = cocoa.CGAffineTransform>(_v: P0): R;
    includesFlip<R = boolean>(): R;
    determinant<R = number>(): R;
  }
  namespace classes {
    export interface NSAffineTransform<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSAffineTransform>(): R;
      new: <R = NSAffineTransform>() => R;
      transform<R = unknown>(): R;
      // + NSAffineTransform(NSAppKitAdditions,NSAppKitAdditionsPrivate,CHAffineTransform_Additions):
      transformWithCGAffineTransform<R = unknown, P0 = cocoa.CGAffineTransform>(_transformWithCGAffineTransform: P0): R;
      transformWithCGAffineTransform_ms<R = unknown, P0 = cocoa.CGAffineTransform>(_transformWithCGAffineTransform_ms: P0): R;
      transformFromStruct_aroundPoint_inPlace<R = unknown, P0 = cocoa._CHTransformStruct, P1 = cocoa.CGPoint, P2 = boolean>(_transformFromStruct: P0, _aroundPoint: P1, _inPlace: P2): R;
      transformFromStruct_aroundPoint<R = unknown, P0 = cocoa._CHTransformStruct, P1 = cocoa.CGPoint>(_transformFromStruct: P0, _aroundPoint: P1): R;
      rotationTransformWithDegrees_aroundPoint<R = unknown, P0 = number, P1 = cocoa.CGPoint>(_rotationTransformWithDegrees: P0, _aroundPoint: P1): R;
      transformWithOffset<R = unknown, P0 = cocoa.CGPoint>(_transformWithOffset: P0): R;
      transformByScaling<R = unknown, P0 = number>(_transformByScaling: P0): R;
      transformByTranslatingXBy_yBy<R = unknown, P0 = number, P1 = number>(_transformByTranslatingXBy: P0, _yBy: P1): R;
    }
  }
}

declare const NSAffineTransform: cocoa.classes.NSAffineTransform;
