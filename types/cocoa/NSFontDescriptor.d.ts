/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFontDescriptor<T = any> {
    // + NSFontDescriptor(JSONEncoder,ModelSyncSupport):
    initWithJSONDecoder<R = unknown, P0 = unknown>(_initWithJSONDecoder: P0): R;
    encodeAsJSON<R = void, P0 = unknown>(_encodeAsJSON: P0): R;
    propertiesAreEqual<R = boolean, P0 = unknown>(_propertiesAreEqual: P0): R;
  }
  namespace classes {
    export interface NSFontDescriptor<T = any> {
      // + NSFontDescriptor(JSONEncoder,ModelSyncSupport):
      
    }
  }
}

declare const NSFontDescriptor: cocoa.classes.NSFontDescriptor;
