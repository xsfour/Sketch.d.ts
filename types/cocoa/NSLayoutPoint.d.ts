/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutPoint<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol, cocoa.NSCodingProtocol {
    constraintsEqualToPoint<R = unknown, P0 = unknown>(_constraintsEqualToPoint: P0): R;
    pointByOffsettingWithXOffsetDimension_yOffsetDimension<R = unknown, P0 = unknown, P1 = unknown>(_pointByOffsettingWithXOffsetDimension: P0, _yOffsetDimension: P1): R;
    pointByOffsettingWithXOffset_yOffset<R = unknown, P0 = number, P1 = number>(_pointByOffsettingWithXOffset: P0, _yOffset: P1): R;
    constraintsEqualToLayoutPoint<R = unknown, P0 = unknown>(_constraintsEqualToLayoutPoint: P0): R;
    layoutPointByOffsettingWithXOffsetDimension_yOffsetDimension<R = unknown, P0 = unknown, P1 = unknown>(_layoutPointByOffsettingWithXOffsetDimension: P0, _yOffsetDimension: P1): R;
    layoutPointByOffsettingWithXOffset_yOffset<R = unknown, P0 = number, P1 = number>(_layoutPointByOffsettingWithXOffset: P0, _yOffset: P1): R;
    dealloc<R = void>(): R;
    initWithXAxisAnchor_yAxisAnchor<R = unknown, P0 = unknown, P1 = unknown>(_initWithXAxisAnchor: P0, _yAxisAnchor: P1): R;
    valueInItem<R = cocoa.CGPoint, P0 = unknown>(_valueInItem: P0): R;
    ruleEqualToLayoutPoint<R = unknown, P0 = unknown>(_ruleEqualToLayoutPoint: P0): R;
    yAxisAnchor<R = cocoa.NSLayoutYAxisAnchor>(): R;
    xAxisAnchor<R = cocoa.NSLayoutXAxisAnchor>(): R;
  }
  namespace classes {
    export interface NSLayoutPoint<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSCodingProtocol {
      alloc<R = NSLayoutPoint>(): R;
      new: <R = NSLayoutPoint>() => R;
      pointWithXAxisAnchor_yAxisAnchor<R = unknown, P0 = unknown, P1 = unknown>(_pointWithXAxisAnchor: P0, _yAxisAnchor: P1): R;
      layoutPointWithXAxisAnchor_yAxisAnchor<R = unknown, P0 = unknown, P1 = unknown>(_layoutPointWithXAxisAnchor: P0, _yAxisAnchor: P1): R;
    }
  }
}

declare const NSLayoutPoint: cocoa.classes.NSLayoutPoint;
