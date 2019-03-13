/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCJSONDecoderDelegateProtocol<T = any> extends NSObjectProtocol {
    decoder_shouldInstantiateObjectOfClass<R = boolean, P0 = BCJSONDecoder, P1 = unknown>(_decoder: P0, _shouldInstantiateObjectOfClass: P1): R;
  }
  namespace classes {
    export interface BCJSONDecoderDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
