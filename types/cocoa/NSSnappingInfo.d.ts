/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSnappingInfo<T = any> extends cocoa.NSObject {
    currentVelocity<R = cocoa.CGPoint>(): R;
    lastSnappedRect<R = cocoa.CGRect>(): R;
    snappedEdges<R = number>(): R;
    sizeSnapRectForFrame_snappedEdges<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = number>(_sizeSnapRectForFrame: P0, _snappedEdges: P1): R;
    snapFrame_forResizingWithNewFramePointer_rectEdge<R = void, P0 = cocoa.CGRect, P1 = cocoa.CGRect, P2 = number>(_snapFrame: P0, _forResizingWithNewFramePointer: P1, _rectEdge: P2): R;
    snapOriginWithFrame_newFramePointer<R = void, P0 = cocoa.CGRect, P1 = cocoa.CGRect>(_snapOriginWithFrame: P0, _newFramePointer: P1): R;
    resetMovement<R = void>(): R;
    addMovementWithMouseLocation_timestamp<R = void, P0 = cocoa.CGPoint, P1 = number>(_addMovementWithMouseLocation: P0, _timestamp: P1): R;
    dealloc<R = void>(): R;
    initWithWindowNumber<R = unknown, P0 = number>(_initWithWindowNumber: P0): R;
    CGSnappingInfo<R = cocoa.CGSnappingInfo>(): R;
  }
  namespace classes {
    export interface NSSnappingInfo<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSSnappingInfo>(): R;
      new: <R = NSSnappingInfo>() => R;
      snappingInfoWithWindowNumber<R = unknown, P0 = number>(_snappingInfoWithWindowNumber: P0): R;
    }
  }
}

declare const NSSnappingInfo: cocoa.classes.NSSnappingInfo;
