/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGlyphInfo<T = any> {
    // + NSGlyphInfo(NSPortCoding):
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
  }
  namespace classes {
    export interface NSGlyphInfo<T = any> {
      // + NSGlyphInfo(NSPortCoding):
      
    }
  }
}

declare const NSGlyphInfo: cocoa.classes.NSGlyphInfo;
