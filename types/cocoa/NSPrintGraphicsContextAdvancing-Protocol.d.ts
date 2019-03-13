/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPrintGraphicsContextAdvancingProtocol<T = any> {
    endDocument<R = void>(): R;
    endPage<R = void>(): R;
    beginPageWithBounds<R = void, P0 = CGRect>(_beginPageWithBounds: P0): R;
    beginDocumentWithTitle<R = void, P0 = NSString>(_beginDocumentWithTitle: P0): R;
  }
  namespace classes {
    export interface NSPrintGraphicsContextAdvancingProtocol<T = any> {  }
  }
}
