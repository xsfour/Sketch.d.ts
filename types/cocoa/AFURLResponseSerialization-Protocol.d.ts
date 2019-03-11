/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFURLResponseSerializationProtocol<T = any> extends cocoa.NSObjectProtocol, cocoa.NSSecureCodingProtocol, cocoa.NSCopyingProtocol {
    responseObjectForResponse_data_error<R = unknown, P0 = cocoa.NSURLResponse, P1 = cocoa.NSData, P2 = unknown>(_responseObjectForResponse: P0, _data: P1, _error: P2): R;
  }
  namespace classes {
    export interface AFURLResponseSerializationProtocol<T = any> extends cocoa.classes.NSObjectProtocol, cocoa.classes.NSSecureCodingProtocol, cocoa.classes.NSCopyingProtocol {  }
  }
}

declare const AFURLResponseSerializationProtocol: cocoa.classes.AFURLResponseSerializationProtocol;
