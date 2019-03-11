/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKAdvertisementMessageContent<T = any> extends cocoa.NSObject, cocoa.SMKMessageCodingProtocol {
    cxx_destruct<R = void>(): R;
    challenge<R = cocoa.NSString>(): R;
    setChallenge<R = void, P0 = cocoa.NSString>(_v: P0): R;
    advertisement<R = cocoa.SMKAdvertisement>(): R;
    setAdvertisement<R = void, P0 = cocoa.SMKAdvertisement>(_v: P0): R;
    dictionaryRepresentation<R = cocoa.NSDictionary>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface SMKAdvertisementMessageContent<T = any> extends cocoa.classes.NSObject, cocoa.classes.SMKMessageCodingProtocol {
      alloc<R = SMKAdvertisementMessageContent>(): R;
      new: <R = SMKAdvertisementMessageContent>() => R;
    }
  }
}

declare const SMKAdvertisementMessageContent: cocoa.classes.SMKAdvertisementMessageContent;
