/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPDFPage<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    initWithPDFData<R = unknown, P0 = unknown>(_initWithPDFData: P0): R;
    size<R = cocoa.CGSize>(): R;
    pageRef<R = cocoa.CGPDFPage>(): R;
  }
  namespace classes {
    export interface MSPDFPage<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSPDFPage>(): R;
      new: <R = MSPDFPage>() => R;
    }
  }
}

declare const MSPDFPage: cocoa.classes.MSPDFPage;
