/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarFullScreenResetableAnimation<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    invalidate<R = void>(): R;
    resetWithDuration_handler<R = void, P0 = number, P1 = cocoa.CDUnknownBlockType>(_resetWithDuration: P0, _handler: P1): R;
    timerFired<R = void, P0 = unknown>(_timerFired: P0): R;
    completeImmediately<R = void>(): R;
    runForTime<R = void, P0 = number>(_runForTime: P0): R;
    initWithDuration_handler<R = unknown, P0 = number, P1 = cocoa.CDUnknownBlockType>(_initWithDuration: P0, _handler: P1): R;
  }
  namespace classes {
    export interface NSToolbarFullScreenResetableAnimation<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSToolbarFullScreenResetableAnimation>(): R;
      new: <R = NSToolbarFullScreenResetableAnimation>() => R;
    }
  }
}

declare const NSToolbarFullScreenResetableAnimation: cocoa.classes.NSToolbarFullScreenResetableAnimation;
