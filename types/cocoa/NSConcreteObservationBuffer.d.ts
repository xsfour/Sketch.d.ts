/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteObservationBuffer<T = any> extends cocoa.NSObservationBuffer {
    setMemoryPressureSensitive<R = void, P0 = boolean>(_setMemoryPressureSensitive: P0): R;
    isMemoryPressureSensitive<R = boolean>(): R;
    setAutomaticallyEmitsObjects<R = void, P0 = boolean>(_setAutomaticallyEmitsObjects: P0): R;
    automaticallyEmitsObjects<R = boolean>(): R;
    setBufferFullHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_setBufferFullHandler: P0): R;
    bufferFullHandler<R = cocoa.CDUnknownBlockType>(): R;
    _receiveBox<R = void, P0 = unknown>(__receiveBox: P0): R;
    _mergeChanges<R = void>(): R;
    _alreadyOnQueueEmitAllObjects<R = void>(): R;
    _alreadyOnQueueEmitObject<R = void>(): R;
  }
  namespace classes {
    export interface NSConcreteObservationBuffer<T = any> extends cocoa.classes.NSObservationBuffer {
      alloc<R = NSConcreteObservationBuffer>(): R;
      new: <R = NSConcreteObservationBuffer>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSConcreteObservationBuffer: cocoa.classes.NSConcreteObservationBuffer;
