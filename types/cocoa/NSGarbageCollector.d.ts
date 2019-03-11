/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGarbageCollector<T = any> extends cocoa.NSObject {
    enableCollectorForPointer<R = void, P0 = void>(_enableCollectorForPointer: P0): R;
    disableCollectorForPointer<R = void, P0 = void>(_disableCollectorForPointer: P0): R;
    collectExhaustively<R = void>(): R;
    collectIfNeeded<R = void>(): R;
    isCollecting<R = boolean>(): R;
    isEnabled<R = boolean>(): R;
    enable<R = void>(): R;
    disable<R = void>(): R;
  }
  namespace classes {
    export interface NSGarbageCollector<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSGarbageCollector>(): R;
      new: <R = NSGarbageCollector>() => R;
      defaultCollector<R = unknown>(): R;
    }
  }
}

declare const NSGarbageCollector: cocoa.classes.NSGarbageCollector;
