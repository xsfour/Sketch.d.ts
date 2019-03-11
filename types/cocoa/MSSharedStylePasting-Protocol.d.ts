/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedStylePastingProtocol<T = any> {
    handlePasteIntoDocument<R = cocoa.NSString, P0 = cocoa.MSDocumentData>(_handlePasteIntoDocument: P0): R;
    currentObjectID_MSSharedStylePasting<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface MSSharedStylePastingProtocol<T = any> {  }
  }
}

declare const MSSharedStylePastingProtocol: cocoa.classes.MSSharedStylePastingProtocol;
