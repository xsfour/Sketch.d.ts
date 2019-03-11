/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSScissorsEventHandler<T = any> extends cocoa.MSEventHandler {
    strokePath_isHovering<R = void, P0 = unknown, P1 = boolean>(_strokePath: P0, _isHovering: P1): R;
    trimPathOnBothSides<R = unknown, P0 = unknown>(_trimPathOnBothSides: P0): R;
    drawThinStrokeBezierSegments_hoverIndex<R = void, P0 = unknown, P1 = number>(_drawThinStrokeBezierSegments: P0, _hoverIndex: P1): R;
    drawThickStrokeBezierPath<R = void, P0 = unknown>(_drawThickStrokeBezierPath: P0): R;
    hoverSegmentForMouse<R = unknown, P0 = cocoa.CGPoint>(_hoverSegmentForMouse: P0): R;
    shapeForIndexPath<R = unknown, P0 = unknown>(_shapeForIndexPath: P0): R;
    canCutSegments<R = boolean>(): R;
    didCutOnMouseDown<R = boolean>(): R;
    setDidCutOnMouseDown<R = void, P0 = boolean>(_v: P0): R;
    hoveringSegment<R = cocoa.NSIndexPath>(): R;
    setHoveringSegment<R = void, P0 = cocoa.NSIndexPath>(_v: P0): R;
  }
  namespace classes {
    export interface MSScissorsEventHandler<T = any> extends cocoa.classes.MSEventHandler {
      alloc<R = MSScissorsEventHandler>(): R;
      new: <R = MSScissorsEventHandler>() => R;
    }
  }
}

declare const MSScissorsEventHandler: cocoa.classes.MSScissorsEventHandler;
