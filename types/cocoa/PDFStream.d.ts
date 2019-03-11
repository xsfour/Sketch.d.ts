/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface PDFStream<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    getDataAndFormat<R = void>(): R;
    initWithStream<R = unknown, P0 = cocoa.CGPDFStream>(_initWithStream: P0): R;
    data<R = cocoa.NSData>(): R;
    setData<R = void, P0 = cocoa.NSData>(_v: P0): R;
    format<R = number>(): R;
    setFormat<R = void, P0 = number>(_v: P0): R;
    dictionary<R = cocoa.NSDictionary>(): R;
    setDictionary<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    stream<R = cocoa.CGPDFStream>(): R;
    setStream<R = void, P0 = cocoa.CGPDFStream>(_v: P0): R;
  }
  namespace classes {
    export interface PDFStream<T = any> extends cocoa.classes.NSObject {
      alloc<R = PDFStream>(): R;
      new: <R = PDFStream>() => R;
    }
  }
}

declare const PDFStream: cocoa.classes.PDFStream;
