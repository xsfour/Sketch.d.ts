/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDisplayCycleObserver<T = any> extends NSObject {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithPhase_handler<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_initWithPhase: P0, _handler: P1): R;
    handler<R = CDUnknownBlockType>(): R;
    phase<R = NSDisplayCyclePhase>(): R;
  }
  namespace classes {
    export interface NSDisplayCycleObserver<T = any> extends NSObject {
      alloc<R = NSDisplayCycleObserver>(): R;
      new: <R = NSDisplayCycleObserver>() => R;
    }
  }
}

declare const NSDisplayCycleObserver: cocoa.classes.NSDisplayCycleObserver;
