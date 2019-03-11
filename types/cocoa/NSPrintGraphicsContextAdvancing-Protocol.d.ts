/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPrintGraphicsContextAdvancingProtocol<T = any> {
    endDocument<R = void>(): R;
    endPage<R = void>(): R;
    beginPageWithBounds<R = void, P0 = cocoa.CGRect>(_beginPageWithBounds: P0): R;
    beginDocumentWithTitle<R = void, P0 = cocoa.NSString>(_beginDocumentWithTitle: P0): R;
  }
  namespace classes {
    export interface NSPrintGraphicsContextAdvancingProtocol<T = any> {  }
  }
}

declare const NSPrintGraphicsContextAdvancingProtocol: cocoa.classes.NSPrintGraphicsContextAdvancingProtocol;
