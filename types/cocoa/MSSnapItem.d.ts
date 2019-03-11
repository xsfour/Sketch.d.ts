/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSnapItem<T = any> extends cocoa.NSObject, cocoa.MSSnappableProtocol {
    cxx_destruct<R = void>(): R;
    shouldDrawDistanceOnSnapTo<R = boolean, P0 = unknown>(_shouldDrawDistanceOnSnapTo: P0): R;
    rotation<R = number>(): R;
    artboardForSnapping<R = unknown>(): R;
    rect_isOnLineWithRect_inDirection<R = boolean, P0 = cocoa.CGRect, P1 = cocoa.CGRect, P2 = number>(_rect: P0, _isOnLineWithRect: P1, _inDirection: P2): R;
    candidateLayersForSnappingSpacingAlongAxis_order<R = unknown, P0 = number, P1 = number>(_candidateLayersForSnappingSpacingAlongAxis: P0, _order: P1): R;
    candidateLayersForSnapping<R = unknown, P0 = number>(_candidateLayersForSnapping: P0): R;
    snapInBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_snapInBlock: P0): R;
    initWithLayers<R = unknown, P0 = unknown>(_initWithLayers: P0): R;
    rectAtInit<R = cocoa.CGRect>(): R;
    setRectAtInit<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    layers<R = cocoa.NSArray>(): R;
    description<R = cocoa.NSString>(): R;
    name<R = cocoa.NSString>(): R;
    snapItemForDrawing<R = cocoa.MSSnappable>(): R;
    coordinateSpace<R = cocoa.MSLayer>(): R;
    rectForSnapping<R = cocoa.CGRect>(): R;
    setRectForSnapping<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    shouldConstrainProportions<R = boolean>(): R;
    supportsResizingForSnapping<R = boolean>(): R;
    layer<R = cocoa.MSLayer>(): R;
    midXHeightAnchor<R = cocoa.MSLayoutPosition>(): R;
    baselineAnchor<R = cocoa.MSLayoutPosition>(): R;
    heightAnchor<R = cocoa.MSLayoutDimension>(): R;
    widthAnchor<R = cocoa.MSLayoutDimension>(): R;
    centerYAnchor<R = cocoa.MSLayoutPosition>(): R;
    centerXAnchor<R = cocoa.MSLayoutPosition>(): R;
    bottomAnchor<R = cocoa.MSLayoutPosition>(): R;
    topAnchor<R = cocoa.MSLayoutPosition>(): R;
    rightAnchor<R = cocoa.MSLayoutPosition>(): R;
    leftAnchor<R = cocoa.MSLayoutPosition>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSSnapItem<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSSnappableProtocol {
      alloc<R = MSSnapItem>(): R;
      new: <R = MSSnapItem>() => R;
      candidateSpacingsBetweenLayers_alongAxis<R = unknown, P0 = unknown, P1 = number>(_candidateSpacingsBetweenLayers: P0, _alongAxis: P1): R;
      snapItemWithLayers<R = unknown, P0 = unknown>(_snapItemWithLayers: P0): R;
    }
  }
}

declare const MSSnapItem: cocoa.classes.MSSnapItem;
