/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKMessageCodingProtocol<T = any> extends cocoa.NSObjectProtocol {
    initWithDictionary<R = unknown, P0 = cocoa.NSDictionary>(_initWithDictionary: P0): R;
    dictionaryRepresentation<R = cocoa.NSDictionary>(): R;
  }
  namespace classes {
    export interface SMKMessageCodingProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const SMKMessageCodingProtocol: cocoa.classes.SMKMessageCodingProtocol;
