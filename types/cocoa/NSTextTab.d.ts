/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextTab<T = any> {
    // + NSTextTab(BCJSONEncoding,TreeAsDictionarySupport):
    initWithJSONDecoder<R = unknown, P0 = unknown>(_initWithJSONDecoder: P0): R;
    encodeAsJSON<R = void, P0 = unknown>(_encodeAsJSON: P0): R;
    treeAsDictionary<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTextTab<T = any> {
      // + NSTextTab(BCJSONEncoding,TreeAsDictionarySupport):
      
    }
  }
}

declare const NSTextTab: cocoa.classes.NSTextTab;
