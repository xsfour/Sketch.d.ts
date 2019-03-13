/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDirectoryEnumerator<T = any> extends NSEnumerator {
    skipDescendants<R = void>(): R;
    skipDescendents<R = void>(): R;
    nextObject<R = unknown>(): R;
    level<R = number>(): R;
    directoryAttributes<R = NSDictionary>(): R;
    fileAttributes<R = NSDictionary>(): R;
  }
  namespace classes {
    export interface NSDirectoryEnumerator<T = any> extends NSEnumerator {  }
  }
}

declare const NSDirectoryEnumerator: cocoa.classes.NSDirectoryEnumerator;
