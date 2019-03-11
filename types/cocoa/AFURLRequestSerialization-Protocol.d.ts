/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFURLRequestSerializationProtocol<T = any> extends cocoa.NSObjectProtocol, cocoa.NSSecureCodingProtocol, cocoa.NSCopyingProtocol {
    requestBySerializingRequest_withParameters_error<R = cocoa.NSURLRequest, P0 = cocoa.NSURLRequest, P1 = unknown, P2 = unknown>(_requestBySerializingRequest: P0, _withParameters: P1, _error: P2): R;
  }
  namespace classes {
    export interface AFURLRequestSerializationProtocol<T = any> extends cocoa.classes.NSObjectProtocol, cocoa.classes.NSSecureCodingProtocol, cocoa.classes.NSCopyingProtocol {  }
  }
}

declare const AFURLRequestSerializationProtocol: cocoa.classes.AFURLRequestSerializationProtocol;
