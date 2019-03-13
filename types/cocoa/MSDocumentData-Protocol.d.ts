/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentDataProtocol<T = any> {
    pages<R = NSArray>(): R;
  }
  namespace classes {
    export interface MSDocumentDataProtocol<T = any> {  }
  }
}
