/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFImageResponseSerializer<T = any> extends cocoa.AFHTTPResponseSerializer {}
  namespace classes {
    export interface AFImageResponseSerializer<T = any> extends cocoa.classes.AFHTTPResponseSerializer {
      alloc<R = AFImageResponseSerializer>(): R;
      new: <R = AFImageResponseSerializer>() => R;
    }
  }
}

declare const AFImageResponseSerializer: cocoa.classes.AFImageResponseSerializer;
