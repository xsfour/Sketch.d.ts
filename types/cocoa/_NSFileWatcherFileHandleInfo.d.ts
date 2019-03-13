/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFileWatcherFileHandleInfo<T = any> extends NSObject {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    close<R = void>(): R;
    verifyAccessByAuditToken<R = boolean, P0 = unknown>(_verifyAccessByAuditToken: P0): R;
    isDirectory<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSFileWatcherFileHandleInfo<T = any> extends NSObject {
      alloc<R = _NSFileWatcherFileHandleInfo>(): R;
      new: <R = _NSFileWatcherFileHandleInfo>() => R;
      openFileWithPath<R = unknown, P0 = unknown>(_openFileWithPath: P0): R;
    }
  }
}
