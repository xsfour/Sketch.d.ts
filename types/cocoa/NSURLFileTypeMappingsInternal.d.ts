/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLFileTypeMappingsInternal<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface NSURLFileTypeMappingsInternal<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSURLFileTypeMappingsInternal>(): R;
      new: <R = NSURLFileTypeMappingsInternal>() => R;
    }
  }
}

declare const NSURLFileTypeMappingsInternal: cocoa.classes.NSURLFileTypeMappingsInternal;
