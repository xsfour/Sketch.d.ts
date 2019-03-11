/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBoxAuxiliary<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    fillColor<R = cocoa.NSColor>(): R;
    setFillColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    borderColor<R = cocoa.NSColor>(): R;
    setBorderColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface NSBoxAuxiliary<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSBoxAuxiliary>(): R;
      new: <R = NSBoxAuxiliary>() => R;
    }
  }
}

declare const NSBoxAuxiliary: cocoa.classes.NSBoxAuxiliary;
