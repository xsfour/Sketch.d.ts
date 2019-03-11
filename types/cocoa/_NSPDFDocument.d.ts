/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPDFDocument<T = any> extends cocoa.NSObject {
    pageCount<R = number>(): R;
    currentPage<R = number>(): R;
    setCurrentPage<R = void, P0 = number>(_setCurrentPage: P0): R;
    bounds<R = cocoa.CGRect>(): R;
    documentRef<R = cocoa.CGPDFDocument>(): R;
    dealloc<R = void>(): R;
    initWithData<R = unknown, P0 = unknown>(_initWithData: P0): R;
  }
  namespace classes {
    export interface _NSPDFDocument<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSPDFDocument>(): R;
      new: <R = _NSPDFDocument>() => R;
    }
  }
}
