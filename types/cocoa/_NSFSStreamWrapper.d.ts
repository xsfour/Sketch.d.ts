/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFSStreamWrapper<T = any> extends NSObject {
    processStream_eventPaths_flags_ids_count<R = void, P0 = __FSEventStream, P1 = unknown, P2 = number, P3 = number, P4 = number>(_processStream: P0, _eventPaths: P1, _flags: P2, _ids: P3, _count: P4): R;
    flushAsync<R = void>(): R;
    invalidate<R = void>(): R;
    dealloc<R = void>(): R;
    initWithRootUrl_eventTypes_handler<R = unknown, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(_initWithRootUrl: P0, _eventTypes: P1, _handler: P2): R;
  }
  namespace classes {
    export interface _NSFSStreamWrapper<T = any> extends NSObject {
      alloc<R = _NSFSStreamWrapper>(): R;
      new: <R = _NSFSStreamWrapper>() => R;
    }
  }
}
