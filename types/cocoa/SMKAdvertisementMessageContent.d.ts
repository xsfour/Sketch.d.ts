/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKAdvertisementMessageContent<T = any> extends NSObject, SMKMessageCodingProtocol {
    cxx_destruct<R = void>(): R;
    challenge<R = NSString>(): R;
    setChallenge<R = void, P0 = NSString>(_v: P0): R;
    advertisement<R = SMKAdvertisement>(): R;
    setAdvertisement<R = void, P0 = SMKAdvertisement>(_v: P0): R;
    dictionaryRepresentation<R = NSDictionary>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface SMKAdvertisementMessageContent<T = any> extends NSObject, SMKMessageCodingProtocol {
      alloc<R = SMKAdvertisementMessageContent>(): R;
      new: <R = SMKAdvertisementMessageContent>() => R;
    }
  }
}

declare const SMKAdvertisementMessageContent: cocoa.classes.SMKAdvertisementMessageContent;
