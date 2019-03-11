/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBezierFillet<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    debugQuickLookObject<R = unknown>(): R;
    addArcToBezierPath_orCGPath<R = void, P0 = unknown, P1 = cocoa.CGPath>(_addArcToBezierPath: P0, _orCGPath: P1): R;
    arcSegments<R = unknown>(): R;
    reversedFillet<R = unknown>(): R;
    angleToPoint<R = number, P0 = cocoa.CGPoint>(_angleToPoint: P0): R;
    initWithSegment1_segment2_segment1Offset_segment2Offset_arcEndPoint1_arcEndPoint2_arcCenter_arcRadius<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = number, P4 = cocoa.CGPoint, P5 = cocoa.CGPoint, P6 = cocoa.CGPoint, P7 = number>(_initWithSegment1: P0, _segment2: P1, _segment1Offset: P2, _segment2Offset: P3, _arcEndPoint1: P4, _arcEndPoint2: P5, _arcCenter: P6, _arcRadius: P7): R;
    initWithSegment1_segment2<R = unknown, P0 = unknown, P1 = unknown>(_initWithSegment1: P0, _segment2: P1): R;
    arcCenter<R = cocoa.CGPoint>(): R;
    arcEndPoint2<R = cocoa.CGPoint>(): R;
    arcEndPoint1<R = cocoa.CGPoint>(): R;
    arcRadius<R = number>(): R;
    segment2Offset<R = number>(): R;
    segment1Offset<R = number>(): R;
    segment2<R = cocoa.MSBezierSegment>(): R;
    segment1<R = cocoa.MSBezierSegment>(): R;
    clockwise<R = boolean>(): R;
    endAngle<R = number>(): R;
    startAngle<R = number>(): R;
  }
  namespace classes {
    export interface MSBezierFillet<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSBezierFillet>(): R;
      new: <R = MSBezierFillet>() => R;
      bezierFilletWithSegment1_segment2_filletRadius<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_bezierFilletWithSegment1: P0, _segment2: P1, _filletRadius: P2): R;
      curveFilletWithSegment1_segment2_filletRadius<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_curveFilletWithSegment1: P0, _segment2: P1, _filletRadius: P2): R;
      lineFilletWithSegment1_segment2_filletRadius<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_lineFilletWithSegment1: P0, _segment2: P1, _filletRadius: P2): R;
      bezierFilletWithSegment1_segment2_segment1Offset<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_bezierFilletWithSegment1: P0, _segment2: P1, _segment1Offset: P2): R;
      curveFilletWithSegment1_segment2_segment1Offset<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_curveFilletWithSegment1: P0, _segment2: P1, _segment1Offset: P2): R;
      lineFilletWithSegment1_segment2_segment1Offset<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_lineFilletWithSegment1: P0, _segment2: P1, _segment1Offset: P2): R;
      zeroRadiusFilletWithSegment1_segment2<R = unknown, P0 = unknown, P1 = unknown>(_zeroRadiusFilletWithSegment1: P0, _segment2: P1): R;
    }
  }
}

declare const MSBezierFillet: cocoa.classes.MSBezierFillet;
