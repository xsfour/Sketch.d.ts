/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDistanceLayoutDimension<T = any> extends NSLayoutDimension, NSCompositeLayoutAnchorProtocol {
    initWithMinuend_subtrahend<R = unknown, P0 = unknown, P1 = unknown>(_initWithMinuend: P0, _subtrahend: P1): R;
    _childAnchors<R = NSArray>(): R;
  }
  namespace classes {
    export interface _NSDistanceLayoutDimension<T = any> extends NSLayoutDimension, NSCompositeLayoutAnchorProtocol {
      alloc<R = _NSDistanceLayoutDimension>(): R;
      new: <R = _NSDistanceLayoutDimension>() => R;
      distanceFromAnchor_toAnchor<R = unknown, P0 = unknown, P1 = unknown>(_distanceFromAnchor: P0, _toAnchor: P1): R;
    }
  }
}
