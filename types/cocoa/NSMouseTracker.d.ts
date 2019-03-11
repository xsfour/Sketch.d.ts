/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMouseTracker<T = any> extends cocoa.NSObject {
    previousEvent<R = unknown>(): R;
    initialEvent<R = unknown>(): R;
    initialPoint<R = cocoa.CGPoint>(): R;
    previousPoint<R = cocoa.CGPoint>(): R;
    currentPoint<R = cocoa.CGPoint>(): R;
    delegate<R = unknown>(): R;
    view<R = unknown>(): R;
    trackingConstraintKeyMask<R = number>(): R;
    setTrackingConstraintKeyMask<R = void, P0 = number>(_setTrackingConstraintKeyMask: P0): R;
    trackingConstraint<R = number>(): R;
    setTrackingConstraint<R = void, P0 = number>(_setTrackingConstraint: P0): R;
    stopTrackingWithEvent<R = boolean, P0 = unknown>(_stopTrackingWithEvent: P0): R;
    continueTrackingWithEvent<R = boolean, P0 = unknown>(_continueTrackingWithEvent: P0): R;
    startTrackingWithEvent_inView_withDelegate<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_startTrackingWithEvent: P0, _inView: P1, _withDelegate: P2): R;
    trackWithEvent_inView_withDelegate<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_trackWithEvent: P0, _inView: P1, _withDelegate: P2): R;
    nextEventForWindow<R = unknown, P0 = unknown>(_nextEventForWindow: P0): R;
    _releaseEvents<R = void>(): R;
    eventMask<R = number>(): R;
    setEventMask<R = void, P0 = number>(_setEventMask: P0): R;
    _setDelegate<R = void, P0 = unknown>(__setDelegate: P0): R;
    setPeriodicDelay_interval<R = void, P0 = number, P1 = number>(_setPeriodicDelay: P0, _interval: P1): R;
    delay<R = number>(): R;
    interval<R = number>(): R;
    _constrainPoint_withEvent<R = cocoa.CGPoint, P0 = cocoa.CGPoint, P1 = unknown>(__constrainPoint: P0, _withEvent: P1): R;
    _getLocalPoint<R = cocoa.CGPoint, P0 = unknown>(__getLocalPoint: P0): R;
  }
  namespace classes {
    export interface NSMouseTracker<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSMouseTracker>(): R;
      new: <R = NSMouseTracker>() => R;
    }
  }
}

declare const NSMouseTracker: cocoa.classes.NSMouseTracker;
