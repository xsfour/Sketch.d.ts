/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCJSONDecoderDelegate<T = any> {}
  namespace classes {
    export interface BCJSONDecoderDelegate<T = any> {  }
  }
}

declare const BCJSONDecoderDelegate: cocoa.classes.BCJSONDecoderDelegate;
