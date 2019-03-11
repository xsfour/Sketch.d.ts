/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchDeviceTouchMap<T = any> extends cocoa.NSObject {
    touchIdentitiesAssociatedWithGestureRecognizer<R = unknown, P0 = unknown>(_touchIdentitiesAssociatedWithGestureRecognizer: P0): R;
    updateActiveGestureRecognizers<R = void>(): R;
    removeGestureRecognizerFromAllKeys<R = void, P0 = unknown>(_removeGestureRecognizerFromAllKeys: P0): R;
    gestureRecognizersForKey<R = unknown, P0 = unknown>(_gestureRecognizersForKey: P0): R;
    allowFlushing<R = void>(): R;
    preventFlushing<R = void>(): R;
    dealloc<R = void>(): R;
    flushCount<R = number>(): R;
    setFlushCount<R = void, P0 = number>(_v: P0): R;
    activeGestureRecognizers<R = cocoa.NSMutableSet>(): R;
    setActiveGestureRecognizers<R = void, P0 = cocoa.NSMutableSet>(_v: P0): R;
    commandeeredTouchIdentities<R = cocoa.NSMutableSet>(): R;
    setCommandeeredTouchIdentities<R = void, P0 = cocoa.NSMutableSet>(_v: P0): R;
    claimedTouchIdentities<R = cocoa.NSMutableSet>(): R;
    setClaimedTouchIdentities<R = void, P0 = cocoa.NSMutableSet>(_v: P0): R;
    cachedBeginTouches<R = cocoa.NSMutableDictionary>(): R;
    setCachedBeginTouches<R = void, P0 = cocoa.NSMutableDictionary>(_v: P0): R;
    cancelledTouches<R = cocoa.NSMutableSet>(): R;
    setCancelledTouches<R = void, P0 = cocoa.NSMutableSet>(_v: P0): R;
    touches<R = cocoa.NSMutableSet>(): R;
    setTouches<R = void, P0 = cocoa.NSMutableSet>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchDeviceTouchMap<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSTouchDeviceTouchMap>(): R;
      new: <R = NSTouchDeviceTouchMap>() => R;
    }
  }
}

declare const NSTouchDeviceTouchMap: cocoa.classes.NSTouchDeviceTouchMap;
