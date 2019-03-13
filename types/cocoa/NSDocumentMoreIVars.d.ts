/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentMoreIVars<T = any> extends NSObject {
    description<R = unknown>(): R;
    recentDocumentID<R = number>(): R;
    setRecentDocumentID<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSDocumentMoreIVars<T = any> extends NSObject {
      alloc<R = NSDocumentMoreIVars>(): R;
      new: <R = NSDocumentMoreIVars>() => R;
    }
  }
}

declare const NSDocumentMoreIVars: cocoa.classes.NSDocumentMoreIVars;
