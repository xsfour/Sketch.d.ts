/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCJSONEncodingProtocol<T = any> extends cocoa.NSObjectProtocol {
    initWithJSONDecoder<R = unknown, P0 = cocoa.BCJSONDecoder>(_initWithJSONDecoder: P0): R;
    encodeAsJSON<R = void, P0 = cocoa.BCJSONEncoder>(_encodeAsJSON: P0): R;
    replacementObjectForJSONEncoder<R = cocoa.NSObject, P0 = cocoa.BCJSONEncoder>(_replacementObjectForJSONEncoder: P0): R;
  }
  namespace classes {
    export interface BCJSONEncodingProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const BCJSONEncodingProtocol: cocoa.classes.BCJSONEncodingProtocol;
