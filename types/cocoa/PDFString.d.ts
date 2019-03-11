/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface PDFString<T = any> extends cocoa.NSObject {
    stringWithMap<R = unknown, P0 = unknown>(_stringWithMap: P0): R;
    data<R = unknown>(): R;
    string<R = unknown>(): R;
    initWithStringRef<R = unknown, P0 = cocoa.CGPDFString>(_initWithStringRef: P0): R;
    ref<R = cocoa.CGPDFString>(): R;
    setRef<R = void, P0 = cocoa.CGPDFString>(_v: P0): R;
  }
  namespace classes {
    export interface PDFString<T = any> extends cocoa.classes.NSObject {
      alloc<R = PDFString>(): R;
      new: <R = PDFString>() => R;
    }
  }
}

declare const PDFString: cocoa.classes.PDFString;
