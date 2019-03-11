/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextList<T = any> {
    // + NSTextList(BCJSONEncoding,ModelSyncSupport,TreeAsDictionarySupport):
    initWithJSONDecoder<R = unknown, P0 = unknown>(_initWithJSONDecoder: P0): R;
    encodeAsJSON<R = void, P0 = unknown>(_encodeAsJSON: P0): R;
    propertiesAreEqual<R = boolean, P0 = unknown>(_propertiesAreEqual: P0): R;
    treeAsDictionary<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTextList<T = any> {
      // + NSTextList(BCJSONEncoding,ModelSyncSupport,TreeAsDictionarySupport):
      
    }
  }
}

declare const NSTextList: cocoa.classes.NSTextList;
