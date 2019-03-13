/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKMessageCodingProtocol<T = any> extends NSObjectProtocol {
    initWithDictionary<R = unknown, P0 = NSDictionary>(_initWithDictionary: P0): R;
    dictionaryRepresentation<R = NSDictionary>(): R;
  }
  namespace classes {
    export interface SMKMessageCodingProtocol<T = any> extends NSObjectProtocol {  }
  }
}
