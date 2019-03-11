/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUIFlushScheduler<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    scheduleTimer<R = void>(): R;
    _timerDidFire<R = void>(): R;
    flushImmediately<R = void>(): R;
    _applicationIsActive<R = boolean>(): R;
    _performFlush<R = void>(): R;
    enableFlushing<R = void>(): R;
    disableFlushing<R = void>(): R;
    cancelTimer<R = void>(): R;
    _invalidateTimer<R = void>(): R;
    dealloc<R = void>(): R;
    initWithHandler<R = unknown, P0 = unknown>(_initWithHandler: P0): R;
  }
  namespace classes {
    export interface NSPersistentUIFlushScheduler<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSPersistentUIFlushScheduler>(): R;
      new: <R = NSPersistentUIFlushScheduler>() => R;
    }
  }
}

declare const NSPersistentUIFlushScheduler: cocoa.classes.NSPersistentUIFlushScheduler;
