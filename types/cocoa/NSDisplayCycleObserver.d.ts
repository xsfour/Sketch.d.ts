/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDisplayCycleObserver<T = any> extends cocoa.NSObject {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithPhase_handler<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_initWithPhase: P0, _handler: P1): R;
    handler<R = cocoa.CDUnknownBlockType>(): R;
    phase<R = cocoa.NSDisplayCyclePhase>(): R;
  }
  namespace classes {
    export interface NSDisplayCycleObserver<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSDisplayCycleObserver>(): R;
      new: <R = NSDisplayCycleObserver>() => R;
    }
  }
}

declare const NSDisplayCycleObserver: cocoa.classes.NSDisplayCycleObserver;
