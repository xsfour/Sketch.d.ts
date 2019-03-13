/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPDFPage<T = any> extends NSObject {
    dealloc<R = void>(): R;
    initWithPDFData<R = unknown, P0 = unknown>(_initWithPDFData: P0): R;
    size<R = CGSize>(): R;
    pageRef<R = CGPDFPage>(): R;
  }
  namespace classes {
    export interface MSPDFPage<T = any> extends NSObject {
      alloc<R = MSPDFPage>(): R;
      new: <R = MSPDFPage>() => R;
    }
  }
}

declare const MSPDFPage: cocoa.classes.MSPDFPage;
