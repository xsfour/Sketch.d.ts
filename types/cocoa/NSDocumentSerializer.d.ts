/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentSerializer<T = any> extends cocoa.NSAKSerializer {}
  namespace classes {
    export interface NSDocumentSerializer<T = any> extends cocoa.classes.NSAKSerializer {
      alloc<R = NSDocumentSerializer>(): R;
      new: <R = NSDocumentSerializer>() => R;
    }
  }
}

declare const NSDocumentSerializer: cocoa.classes.NSDocumentSerializer;
