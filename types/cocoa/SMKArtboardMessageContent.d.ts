/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKArtboardMessageContent<T = any> extends cocoa.NSObject, cocoa.SMKMessageCodingProtocol {
    cxx_destruct<R = void>(): R;
    constrainingSize<R = cocoa.CGSize>(): R;
    setConstrainingSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    rect<R = cocoa.CGRect>(): R;
    setRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    identifier<R = cocoa.NSString>(): R;
    setIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    dictionaryRepresentation<R = cocoa.NSDictionary>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface SMKArtboardMessageContent<T = any> extends cocoa.classes.NSObject, cocoa.classes.SMKMessageCodingProtocol {
      alloc<R = SMKArtboardMessageContent>(): R;
      new: <R = SMKArtboardMessageContent>() => R;
    }
  }
}

declare const SMKArtboardMessageContent: cocoa.classes.SMKArtboardMessageContent;
