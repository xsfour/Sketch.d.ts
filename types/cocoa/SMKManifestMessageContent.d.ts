/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKManifestMessageContent<T = any> extends cocoa.NSObject, cocoa.SMKMessageCodingProtocol {
    cxx_destruct<R = void>(): R;
    manifest<R = cocoa.NSDictionary>(): R;
    setManifest<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    dictionaryRepresentation<R = cocoa.NSDictionary>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface SMKManifestMessageContent<T = any> extends cocoa.classes.NSObject, cocoa.classes.SMKMessageCodingProtocol {
      alloc<R = SMKManifestMessageContent>(): R;
      new: <R = SMKManifestMessageContent>() => R;
    }
  }
}

declare const SMKManifestMessageContent: cocoa.classes.SMKManifestMessageContent;
