/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFileWatcherDirectoryFileHandleInfo<T = any> extends _NSFileWatcherFileHandleInfo {
    hash<R = number>(): R;
    isDirectory<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSFileWatcherDirectoryFileHandleInfo<T = any> extends _NSFileWatcherFileHandleInfo {
      alloc<R = _NSFileWatcherDirectoryFileHandleInfo>(): R;
      new: <R = _NSFileWatcherDirectoryFileHandleInfo>() => R;
    }
  }
}
