/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteDecorationElement<T = any> extends cocoa.NSView, cocoa.NSCollectionViewElementProtocol {
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    identifier<R = cocoa.NSString>(): R;
    setIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPaletteDecorationElement<T = any> extends cocoa.classes.NSView, cocoa.classes.NSCollectionViewElementProtocol {
      alloc<R = NSTouchBarCustomizationPaletteDecorationElement>(): R;
      new: <R = NSTouchBarCustomizationPaletteDecorationElement>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteDecorationElement: cocoa.classes.NSTouchBarCustomizationPaletteDecorationElement;
