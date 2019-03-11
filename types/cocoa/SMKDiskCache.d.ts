/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKDiskCache<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    setObject_forKeyedSubscript<R = void, P0 = unknown, P1 = unknown>(_setObject: P0, _forKeyedSubscript: P1): R;
    objectForKeyedSubscript<R = unknown, P0 = unknown>(_objectForKeyedSubscript: P0): R;
    containsObjectForKey<R = boolean, P0 = unknown>(_containsObjectForKey: P0): R;
    filePathForKey<R = unknown, P0 = unknown>(_filePathForKey: P0): R;
    fileNameForKey<R = unknown, P0 = unknown>(_fileNameForKey: P0): R;
    removeCacheDirectory<R = void>(): R;
    createCacheDirectory<R = void>(): R;
    applicationWillTerminateNotification<R = void, P0 = unknown>(_applicationWillTerminateNotification: P0): R;
    dealloc<R = void>(): R;
    initWithQOS<R = unknown, P0 = number>(_initWithQOS: P0): R;
    fileManager<R = cocoa.NSFileManager>(): R;
    setFileManager<R = void, P0 = cocoa.NSFileManager>(_v: P0): R;
    queue<R = cocoa.OS_dispatch_queue>(): R;
    setQueue<R = void, P0 = cocoa.OS_dispatch_queue>(_v: P0): R;
    delegate<R = cocoa.SMKDiskCacheDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.SMKDiskCacheDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface SMKDiskCache<T = any> extends cocoa.classes.NSObject {
      alloc<R = SMKDiskCache>(): R;
      new: <R = SMKDiskCache>() => R;
    }
  }
}

declare const SMKDiskCache: cocoa.classes.SMKDiskCache;
