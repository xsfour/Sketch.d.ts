/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRulerViewPrivateData<T = any> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSRulerViewPrivateData<T = any> extends NSObject {
      alloc<R = NSRulerViewPrivateData>(): R;
      new: <R = NSRulerViewPrivateData>() => R;
    }
  }
}

declare const NSRulerViewPrivateData: cocoa.classes.NSRulerViewPrivateData;
