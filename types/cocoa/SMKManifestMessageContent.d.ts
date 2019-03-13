/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKManifestMessageContent<T = any> extends NSObject, SMKMessageCodingProtocol {
    cxx_destruct<R = void>(): R;
    manifest<R = NSDictionary>(): R;
    setManifest<R = void, P0 = NSDictionary>(_v: P0): R;
    dictionaryRepresentation<R = NSDictionary>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface SMKManifestMessageContent<T = any> extends NSObject, SMKMessageCodingProtocol {
      alloc<R = SMKManifestMessageContent>(): R;
      new: <R = SMKManifestMessageContent>() => R;
    }
  }
}

declare const SMKManifestMessageContent: cocoa.classes.SMKManifestMessageContent;
