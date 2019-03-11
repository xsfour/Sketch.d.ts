/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKMessage<T = any> extends cocoa.NSObject, cocoa.SMKMessageCodingProtocol {
    cxx_destruct<R = void>(): R;
    initWithType<R = unknown, P0 = unknown>(_initWithType: P0): R;
    content<R = cocoa.SMKMessageCoding>(): R;
    setContent<R = void, P0 = cocoa.SMKMessageCoding>(_v: P0): R;
    type<R = cocoa.NSString>(): R;
    setType<R = void, P0 = cocoa.NSString>(_v: P0): R;
    contentClass<R = unknown>(): R;
    dictionaryRepresentation<R = cocoa.NSDictionary>(): R;
    messageData<R = cocoa.NSData>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface SMKMessage<T = any> extends cocoa.classes.NSObject, cocoa.classes.SMKMessageCodingProtocol {
      alloc<R = SMKMessage>(): R;
      new: <R = SMKMessage>() => R;
      classForType<R = unknown, P0 = unknown>(_classForType: P0): R;
      messageFromData<R = unknown, P0 = unknown>(_messageFromData: P0): R;
    }
  }
}

declare const SMKMessage: cocoa.classes.SMKMessage;
