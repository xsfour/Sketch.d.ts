/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRectSet<T = any> extends cocoa.NSObject {
    strokeExactInterior<R = void>(): R;
    fillExactInterior<R = void>(): R;
    stroke<R = void>(): R;
    fill<R = void>(): R;
    setClip<R = void>(): R;
    addClip<R = void>(): R;
    convertFromAncestor_toView_clipTo<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CGRect>(_convertFromAncestor: P0, _toView: P1, _clipTo: P2): R;
    intersectWithRect<R = void, P0 = cocoa.CGRect>(_intersectWithRect: P0): R;
    subtractRect<R = void, P0 = cocoa.CGRect>(_subtractRect: P0): R;
    setEmpty<R = void>(): R;
    count<R = number>(): R;
    rects<R = cocoa.CGRect>(): R;
    bounds<R = cocoa.CGRect>(): R;
    isEmpty<R = boolean>(): R;
    description<R = unknown>(): R;
    copyWithZone<R = unknown, P0 = cocoa._NSZone>(_copyWithZone: P0): R;
    dealloc<R = void>(): R;
    initWithCopyOfRects_count_bounds<R = unknown, P0 = cocoa.CGRect, P1 = number, P2 = cocoa.CGRect>(_initWithCopyOfRects: P0, _count: P1, _bounds: P2): R;
    initWithRegion<R = unknown, P0 = unknown>(_initWithRegion: P0): R;
    initWithRect<R = unknown, P0 = cocoa.CGRect>(_initWithRect: P0): R;
  }
  namespace classes {
    export interface NSRectSet<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSRectSet>(): R;
      new: <R = NSRectSet>() => R;
      emptyRectSet<R = unknown>(): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSRectSet: cocoa.classes.NSRectSet;
