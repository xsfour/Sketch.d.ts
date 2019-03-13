/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSGestureRecognizerDelayedEvent<T = any> extends NSObject {
    description<R = unknown>(): R;
    addGestureRecognizer<R = void, P0 = unknown>(_addGestureRecognizer: P0): R;
    delayCount<R = number>(): R;
    incrementDelayCount<R = void>(): R;
    decrementDelayCount<R = number>(): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    dealloc<R = void>(): R;
    gestureRecognizers<R = NSArray>(): R;
    cloneForSecondDelivery<R = boolean>(): R;
    setCloneForSecondDelivery<R = void, P0 = boolean>(_v: P0): R;
    event<R = NSEvent>(): R;
    setEvent<R = void, P0 = NSEvent>(_v: P0): R;
    timestampForDelivery<R = number>(): R;
  }
  namespace classes {
    export interface _NSGestureRecognizerDelayedEvent<T = any> extends NSObject {
      alloc<R = _NSGestureRecognizerDelayedEvent>(): R;
      new: <R = _NSGestureRecognizerDelayedEvent>() => R;
    }
  }
}
