/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWindowMoveData<T = any> extends NSObject {
    catchupSize<R = CGSize>(): R;
    setCatchupSize<R = void, P0 = CGSize>(_v: P0): R;
    newEventLocation<R = CGPoint>(): R;
    setNewEventLocation<R = void, P0 = CGPoint>(_v: P0): R;
    offset<R = CGSize>(): R;
    setOffset<R = void, P0 = CGSize>(_v: P0): R;
    lastEventLocation<R = CGPoint>(): R;
    setLastEventLocation<R = void, P0 = CGPoint>(_v: P0): R;
    startingEventLocation<R = CGPoint>(): R;
    setStartingEventLocation<R = void, P0 = CGPoint>(_v: P0): R;
    startingOrigin<R = CGPoint>(): R;
    setStartingOrigin<R = void, P0 = CGPoint>(_v: P0): R;
  }
  namespace classes {
    export interface _NSWindowMoveData<T = any> extends NSObject {
      alloc<R = _NSWindowMoveData>(): R;
      new: <R = _NSWindowMoveData>() => R;
    }
  }
}
