/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentDataProtocol<T = any> {
    pages<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface MSDocumentDataProtocol<T = any> {  }
  }
}

declare const MSDocumentDataProtocol: cocoa.classes.MSDocumentDataProtocol;
