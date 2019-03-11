/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPDFImageRep<T = any> extends cocoa.NSImageRep {
    initWithData<R = unknown, P0 = unknown>(_initWithData: P0): R;
    pageCount<R = number>(): R;
    currentPage<R = number>(): R;
    setCurrentPage<R = void, P0 = number>(_v: P0): R;
    bounds<R = cocoa.CGRect>(): R;
    PDFRepresentation<R = cocoa.NSData>(): R;
    // + NSPDFImageRep(Alpha,MSSmallerArchiving):
    repSupportsAlpha<R = boolean>(): R;
    dataForArchiving<R = unknown>(): R;
    hasPDFRepresentation<R = boolean>(): R;
  }
  namespace classes {
    export interface NSPDFImageRep<T = any> extends cocoa.classes.NSImageRep {
      alloc<R = NSPDFImageRep>(): R;
      new: <R = NSPDFImageRep>() => R;
      imageRepWithData<R = unknown, P0 = unknown>(_imageRepWithData: P0): R;
      // + NSPDFImageRep(Alpha,MSSmallerArchiving):
      
    }
  }
}

declare const NSPDFImageRep: cocoa.classes.NSPDFImageRep;
