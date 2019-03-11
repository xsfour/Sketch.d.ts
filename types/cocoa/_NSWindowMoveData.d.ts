/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWindowMoveData<T = any> extends cocoa.NSObject {
    catchupSize<R = cocoa.CGSize>(): R;
    setCatchupSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    newEventLocation<R = cocoa.CGPoint>(): R;
    setNewEventLocation<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    offset<R = cocoa.CGSize>(): R;
    setOffset<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    lastEventLocation<R = cocoa.CGPoint>(): R;
    setLastEventLocation<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    startingEventLocation<R = cocoa.CGPoint>(): R;
    setStartingEventLocation<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    startingOrigin<R = cocoa.CGPoint>(): R;
    setStartingOrigin<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
  }
  namespace classes {
    export interface _NSWindowMoveData<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSWindowMoveData>(): R;
      new: <R = _NSWindowMoveData>() => R;
    }
  }
}
