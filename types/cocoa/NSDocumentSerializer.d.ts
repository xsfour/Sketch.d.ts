/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentSerializer<T = any> extends NSAKSerializer {}
  namespace classes {
    export interface NSDocumentSerializer<T = any> extends NSAKSerializer {
      alloc<R = NSDocumentSerializer>(): R;
      new: <R = NSDocumentSerializer>() => R;
    }
  }
}

declare const NSDocumentSerializer: cocoa.classes.NSDocumentSerializer;
