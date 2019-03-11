/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenStorage<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    startingSpaceID<R = number>(): R;
    setStartingSpaceID<R = void, P0 = number>(_v: P0): R;
    allSpaceParticipatingWindowNumbersDuringEnterTransition<R = cocoa.NSSet>(): R;
    setAllSpaceParticipatingWindowNumbersDuringEnterTransition<R = void, P0 = cocoa.NSSet>(_v: P0): R;
    participatingWindowNumbersDuringExitTransition<R = cocoa.NSSet>(): R;
    setParticipatingWindowNumbersDuringExitTransition<R = void, P0 = cocoa.NSSet>(_v: P0): R;
    participatingWindowNumbersDuringEnterTransition<R = cocoa.NSSet>(): R;
    setParticipatingWindowNumbersDuringEnterTransition<R = void, P0 = cocoa.NSSet>(_v: P0): R;
  }
  namespace classes {
    export interface _NSFullScreenStorage<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSFullScreenStorage>(): R;
      new: <R = _NSFullScreenStorage>() => R;
    }
  }
}
