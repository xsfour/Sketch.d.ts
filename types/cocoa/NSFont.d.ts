/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFont<T = any> {
    // + NSFont(NSPortCoding,_NSAdvanceConvenience,CHFontAttributes,Chocolat,ModelSyncSupport,SVG,TreeAsDictionarySupport):
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    _trackingNecessaryToScaleToFontOfSize<R = number, P0 = number>(__trackingNecessaryToScaleToFontOfSize: P0): R;
    propertiesAreEqual<R = boolean, P0 = unknown>(_propertiesAreEqual: P0): R;
    addSVGAttributes<R = void, P0 = unknown>(_addSVGAttributes: P0): R;
    treeAsDictionary<R = unknown>(): R;
    _spaceGlyphAdvance<R = number>(): R;
  }
  namespace classes {
    export interface NSFont<T = any> {
      // + NSFont(NSPortCoding,_NSAdvanceConvenience,CHFontAttributes,Chocolat,ModelSyncSupport,SVG,TreeAsDictionarySupport):
      fontPreventingAutoActivationWithName_size_bc<R = unknown, P0 = unknown, P1 = number>(_fontPreventingAutoActivationWithName: P0, _size_bc: P1): R;
      fontWithName_size_bc<R = unknown, P0 = unknown, P1 = number>(_fontWithName: P0, _size_bc: P1): R;
      setPreventsAutoActivation_bc<R = void, P0 = boolean>(_setPreventsAutoActivation_bc: P0): R;
      preventsAutoActivation_bc<R = boolean>(): R;
    }
  }
}

declare const NSFont: cocoa.classes.NSFont;
