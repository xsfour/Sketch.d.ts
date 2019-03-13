/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSParagraphStyle<T = any> {
    // + NSParagraphStyle(Alignment,Chocolat,MSFixedLineHeight,ModelSyncSupport,SVG,TreeAsDictionarySupport):
    initWithJSONDecoder<R = unknown, P0 = unknown>(_initWithJSONDecoder: P0): R;
    encodeAsJSON<R = void, P0 = unknown>(_encodeAsJSON: P0): R;
    propertiesToArchive<R = unknown>(): R;
    propertiesDictionary<R = unknown>(): R;
    propertiesAreEqual<R = boolean, P0 = unknown>(_propertiesAreEqual: P0): R;
    addSVGAttributes<R = void, P0 = unknown>(_addSVGAttributes: P0): R;
    treeAsDictionary<R = unknown>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    fixedLineHeight_ms<R = number>(): R;
  }
  namespace classes {
    export interface NSParagraphStyle<T = any> {
      // + NSParagraphStyle(Alignment,Chocolat,MSFixedLineHeight,ModelSyncSupport,SVG,TreeAsDictionarySupport):
      paragraphStyleWithAlignment_ms<R = unknown, P0 = number>(_paragraphStyleWithAlignment_ms: P0): R;
    }
  }
}

declare const NSParagraphStyle: cocoa.classes.NSParagraphStyle;
