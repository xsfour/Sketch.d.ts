/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKConnectionMessageContent<T = any> extends cocoa.NSObject, cocoa.SMKMessageCodingProtocol {
    cxx_destruct<R = void>(): R;
    supportsURLRequests<R = boolean>(): R;
    setSupportsURLRequests<R = void, P0 = boolean>(_v: P0): R;
    serverName<R = cocoa.NSString>(): R;
    setServerName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    serverPort<R = number>(): R;
    setServerPort<R = void, P0 = number>(_v: P0): R;
    device<R = cocoa.NSString>(): R;
    setDevice<R = void, P0 = cocoa.NSString>(_v: P0): R;
    token<R = cocoa.NSString>(): R;
    setToken<R = void, P0 = cocoa.NSString>(_v: P0): R;
    dictionaryRepresentation<R = cocoa.NSDictionary>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface SMKConnectionMessageContent<T = any> extends cocoa.classes.NSObject, cocoa.classes.SMKMessageCodingProtocol {
      alloc<R = SMKConnectionMessageContent>(): R;
      new: <R = SMKConnectionMessageContent>() => R;
    }
  }
}

declare const SMKConnectionMessageContent: cocoa.classes.SMKConnectionMessageContent;
