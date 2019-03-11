/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFHTTPResponseSerializer<T = any> extends cocoa.NSObject, cocoa.AFURLResponseSerializationProtocol {
    cxx_destruct<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    validateResponse_data_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_validateResponse: P0, _data: P1, _error: P2): R;
    acceptableContentTypes<R = cocoa.NSSet>(): R;
    setAcceptableContentTypes<R = void, P0 = cocoa.NSSet>(_v: P0): R;
    acceptableStatusCodes<R = cocoa.NSIndexSet>(): R;
    setAcceptableStatusCodes<R = void, P0 = cocoa.NSIndexSet>(_v: P0): R;
    stringEncoding<R = number>(): R;
    setStringEncoding<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface AFHTTPResponseSerializer<T = any> extends cocoa.classes.NSObject, cocoa.classes.AFURLResponseSerializationProtocol {
      alloc<R = AFHTTPResponseSerializer>(): R;
      new: <R = AFHTTPResponseSerializer>() => R;
      serializer<R = unknown>(): R;
    }
  }
}

declare const AFHTTPResponseSerializer: cocoa.classes.AFHTTPResponseSerializer;
