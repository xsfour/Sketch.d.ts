/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCodingProtocol<T = any> {
    initWithCoder<R = unknown, P0 = cocoa.NSCoder>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = cocoa.NSCoder>(_encodeWithCoder: P0): R;
  }
  namespace classes {
    export interface NSCodingProtocol<T = any> {  }
  }
}

declare const NSCodingProtocol: cocoa.classes.NSCodingProtocol;
