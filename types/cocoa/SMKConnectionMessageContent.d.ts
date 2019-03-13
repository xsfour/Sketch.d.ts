/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKConnectionMessageContent<T = any> extends NSObject, SMKMessageCodingProtocol {
    cxx_destruct<R = void>(): R;
    supportsURLRequests<R = boolean>(): R;
    setSupportsURLRequests<R = void, P0 = boolean>(_v: P0): R;
    serverName<R = NSString>(): R;
    setServerName<R = void, P0 = NSString>(_v: P0): R;
    serverPort<R = number>(): R;
    setServerPort<R = void, P0 = number>(_v: P0): R;
    device<R = NSString>(): R;
    setDevice<R = void, P0 = NSString>(_v: P0): R;
    token<R = NSString>(): R;
    setToken<R = void, P0 = NSString>(_v: P0): R;
    dictionaryRepresentation<R = NSDictionary>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface SMKConnectionMessageContent<T = any> extends NSObject, SMKMessageCodingProtocol {
      alloc<R = SMKConnectionMessageContent>(): R;
      new: <R = SMKConnectionMessageContent>() => R;
    }
  }
}

declare const SMKConnectionMessageContent: cocoa.classes.SMKConnectionMessageContent;
