/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLError<T = any> extends cocoa.NSError {}
  namespace classes {
    export interface NSURLError<T = any> extends cocoa.classes.NSError {
      alloc<R = NSURLError>(): R;
      new: <R = NSURLError>() => R;
    }
  }
}

declare const NSURLError: cocoa.classes.NSURLError;
