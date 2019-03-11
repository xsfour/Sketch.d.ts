/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDirectoryEnumerator<T = any> extends cocoa.NSEnumerator {
    skipDescendants<R = void>(): R;
    skipDescendents<R = void>(): R;
    nextObject<R = unknown>(): R;
    level<R = number>(): R;
    directoryAttributes<R = cocoa.NSDictionary>(): R;
    fileAttributes<R = cocoa.NSDictionary>(): R;
  }
  namespace classes {
    export interface NSDirectoryEnumerator<T = any> extends cocoa.classes.NSEnumerator {  }
  }
}

declare const NSDirectoryEnumerator: cocoa.classes.NSDirectoryEnumerator;
