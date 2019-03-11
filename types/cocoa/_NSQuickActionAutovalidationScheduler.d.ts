/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionAutovalidationScheduler<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    windowDidUpdate<R = void, P0 = unknown>(_windowDidUpdate: P0): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    cancel<R = void>(): R;
    start<R = void>(): R;
    dealloc<R = void>(): R;
    initWithHandler<R = unknown, P0 = unknown>(_initWithHandler: P0): R;
    itemSource<R = cocoa._NSQuickActionItemSource>(): R;
    setItemSource<R = void, P0 = cocoa._NSQuickActionItemSource>(_v: P0): R;
  }
  namespace classes {
    export interface _NSQuickActionAutovalidationScheduler<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSQuickActionAutovalidationScheduler>(): R;
      new: <R = _NSQuickActionAutovalidationScheduler>() => R;
      schedulerWithHandler<R = unknown, P0 = unknown>(_schedulerWithHandler: P0): R;
    }
  }
}
