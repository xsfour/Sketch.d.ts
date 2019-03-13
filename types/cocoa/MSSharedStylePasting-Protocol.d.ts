/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedStylePastingProtocol<T = any> {
    handlePasteIntoDocument<R = NSString, P0 = MSDocumentData>(_handlePasteIntoDocument: P0): R;
    currentObjectID_MSSharedStylePasting<R = NSString>(): R;
  }
  namespace classes {
    export interface MSSharedStylePastingProtocol<T = any> {  }
  }
}
