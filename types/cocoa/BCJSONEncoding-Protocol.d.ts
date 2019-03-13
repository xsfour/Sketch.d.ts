/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCJSONEncodingProtocol<T = any> extends NSObjectProtocol {
    initWithJSONDecoder<R = unknown, P0 = BCJSONDecoder>(_initWithJSONDecoder: P0): R;
    encodeAsJSON<R = void, P0 = BCJSONEncoder>(_encodeAsJSON: P0): R;
    replacementObjectForJSONEncoder<R = NSObject, P0 = BCJSONEncoder>(_replacementObjectForJSONEncoder: P0): R;
  }
  namespace classes {
    export interface BCJSONEncodingProtocol<T = any> extends NSObjectProtocol {  }
  }
}
