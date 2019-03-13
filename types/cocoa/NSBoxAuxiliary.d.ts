/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBoxAuxiliary<T = any> extends NSObject {
    dealloc<R = void>(): R;
    fillColor<R = NSColor>(): R;
    setFillColor<R = void, P0 = NSColor>(_v: P0): R;
    borderColor<R = NSColor>(): R;
    setBorderColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface NSBoxAuxiliary<T = any> extends NSObject {
      alloc<R = NSBoxAuxiliary>(): R;
      new: <R = NSBoxAuxiliary>() => R;
    }
  }
}

declare const NSBoxAuxiliary: cocoa.classes.NSBoxAuxiliary;
