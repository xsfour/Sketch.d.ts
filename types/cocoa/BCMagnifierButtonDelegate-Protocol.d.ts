/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCMagnifierButtonDelegateProtocol<T = any> {
    magnifierButtonDocumentColorSpace<R = cocoa.NSColorSpace, P0 = cocoa.BCMagnifierButton>(_magnifierButtonDocumentColorSpace: P0): R;
  }
  namespace classes {
    export interface BCMagnifierButtonDelegateProtocol<T = any> {  }
  }
}

declare const BCMagnifierButtonDelegateProtocol: cocoa.classes.BCMagnifierButtonDelegateProtocol;
