/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBlockObservationSink<T = any> extends cocoa.NSObservationSink {
    dealloc<R = void>(): R;
    _receiveBox<R = void, P0 = unknown>(__receiveBox: P0): R;
    initWithBlock_tag<R = unknown, P0 = unknown, P1 = number>(_initWithBlock: P0, _tag: P1): R;
  }
  namespace classes {
    export interface NSBlockObservationSink<T = any> extends cocoa.classes.NSObservationSink {
      alloc<R = NSBlockObservationSink>(): R;
      new: <R = NSBlockObservationSink>() => R;
    }
  }
}

declare const NSBlockObservationSink: cocoa.classes.NSBlockObservationSink;
