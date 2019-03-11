/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FMDatabaseQueue<T = any> extends cocoa.NSObject {
    inSavePoint<R = unknown, P0 = cocoa.CDUnknownBlockType>(_inSavePoint: P0): R;
    inTransaction<R = void, P0 = cocoa.CDUnknownBlockType>(_inTransaction: P0): R;
    inDeferredTransaction<R = void, P0 = cocoa.CDUnknownBlockType>(_inDeferredTransaction: P0): R;
    beginTransaction_withBlock<R = void, P0 = boolean, P1 = cocoa.CDUnknownBlockType>(_beginTransaction: P0, _withBlock: P1): R;
    inDatabase<R = void, P0 = cocoa.CDUnknownBlockType>(_inDatabase: P0): R;
    database<R = unknown>(): R;
    close<R = boolean>(): R;
    dealloc<R = void>(): R;
    initWithPath<R = unknown, P0 = unknown>(_initWithPath: P0): R;
    initWithPath_flags<R = unknown, P0 = unknown, P1 = number>(_initWithPath: P0, _flags: P1): R;
    initWithPath_flags_vfs<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithPath: P0, _flags: P1, _vfs: P2): R;
    openFlags<R = number>(): R;
    path<R = cocoa.NSString>(): R;
    setPath<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface FMDatabaseQueue<T = any> extends cocoa.classes.NSObject {
      alloc<R = FMDatabaseQueue>(): R;
      new: <R = FMDatabaseQueue>() => R;
      databaseClass<R = unknown>(): R;
      databaseQueueWithPath_flags<R = unknown, P0 = unknown, P1 = number>(_databaseQueueWithPath: P0, _flags: P1): R;
      databaseQueueWithPath<R = unknown, P0 = unknown>(_databaseQueueWithPath: P0): R;
    }
  }
}

declare const FMDatabaseQueue: cocoa.classes.FMDatabaseQueue;
