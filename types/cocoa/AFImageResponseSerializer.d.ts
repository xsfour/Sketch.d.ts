/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFImageResponseSerializer<T = any> extends AFHTTPResponseSerializer {}
  namespace classes {
    export interface AFImageResponseSerializer<T = any> extends AFHTTPResponseSerializer {
      alloc<R = AFImageResponseSerializer>(): R;
      new: <R = AFImageResponseSerializer>() => R;
    }
  }
}

declare const AFImageResponseSerializer: cocoa.classes.AFImageResponseSerializer;
