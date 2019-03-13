/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSnappingTarget<T = any> extends NSObject, NSCopyingProtocol {
    description<R = unknown>(): R;
    targetByApplyingTransform<R = unknown, P0 = CGAffineTransform>(_targetByApplyingTransform: P0): R;
    initWithPoint_directionVector_guideType<R = unknown, P0 = CGPoint, P1 = CGVector, P2 = number>(_initWithPoint: P0, _directionVector: P1, _guideType: P2): R;
    initWithPoint_axis_wantsGuide_length<R = unknown, P0 = CGPoint, P1 = number, P2 = boolean, P3 = number>(_initWithPoint: P0, _axis: P1, _wantsGuide: P2, _length: P3): R;
    initWithPosition_onAxis<R = unknown, P0 = number, P1 = number>(_initWithPosition: P0, _onAxis: P1): R;
    initWithGuideLine<R = unknown, P0 = MSLineSegment>(_initWithGuideLine: P0): R;
    guideType<R = number>(): R;
    directionVector<R = CGVector>(): R;
    point<R = CGPoint>(): R;
    lineSegment<R = MSLineSegment>(): R;
    line<R = MSLine>(): R;
  }
  namespace classes {
    export interface MSSnappingTarget<T = any> extends NSObject, NSCopyingProtocol {
      alloc<R = MSSnappingTarget>(): R;
      new: <R = MSSnappingTarget>() => R;
      targetsForEdgesOfRect_includeCenter<R = unknown, P0 = CGRect, P1 = boolean>(_targetsForEdgesOfRect: P0, _includeCenter: P1): R;
    }
  }
}

declare const MSSnappingTarget: cocoa.classes.MSSnappingTarget;
