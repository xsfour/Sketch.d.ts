/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCStructuredFile<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    checkDatabaseIsOpen<R = boolean, P0 = unknown>(_checkDatabaseIsOpen: P0): R;
    readMetaData<R = boolean, P0 = unknown>(_readMetaData: P0): R;
    close<R = boolean, P0 = unknown>(_close: P0): R;
    dataWithKey_error<R = unknown, P0 = unknown, P1 = unknown>(_dataWithKey: P0, _error: P1): R;
    metaDataWithKey<R = unknown, P0 = unknown>(_metaDataWithKey: P0): R;
    metadata<R = unknown>(): R;
    openForReadingWithError<R = boolean, P0 = unknown>(_openForReadingWithError: P0): R;
    initWithURL_error<R = unknown, P0 = unknown, P1 = unknown>(_initWithURL: P0, _error: P1): R;
    db<R = cocoa.FMDatabaseQueue>(): R;
    setDb<R = void, P0 = cocoa.FMDatabaseQueue>(_v: P0): R;
    cachedMetadata<R = cocoa.NSMutableDictionary>(): R;
    setCachedMetadata<R = void, P0 = cocoa.NSMutableDictionary>(_v: P0): R;
    url<R = cocoa.NSURL>(): R;
    setUrl<R = void, P0 = cocoa.NSURL>(_v: P0): R;
  }
  namespace classes {
    export interface BCStructuredFile<T = any> extends cocoa.classes.NSObject {
      alloc<R = BCStructuredFile>(): R;
      new: <R = BCStructuredFile>() => R;
      errorWithCode<R = unknown, P0 = number>(_errorWithCode: P0): R;
    }
  }
}

declare const BCStructuredFile: cocoa.classes.BCStructuredFile;
