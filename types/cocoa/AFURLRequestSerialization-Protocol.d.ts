/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFURLRequestSerializationProtocol<T = any> extends NSObjectProtocol, NSSecureCodingProtocol, NSCopyingProtocol {
    requestBySerializingRequest_withParameters_error<R = NSURLRequest, P0 = NSURLRequest, P1 = unknown, P2 = unknown>(_requestBySerializingRequest: P0, _withParameters: P1, _error: P2): R;
  }
  namespace classes {
    export interface AFURLRequestSerializationProtocol<T = any> extends NSObjectProtocol, NSSecureCodingProtocol, NSCopyingProtocol {  }
  }
}
