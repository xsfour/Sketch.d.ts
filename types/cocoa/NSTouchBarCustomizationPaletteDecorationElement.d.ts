/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteDecorationElement<T = any> extends NSView, NSCollectionViewElementProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPaletteDecorationElement<T = any> extends NSView, NSCollectionViewElementProtocol {
      alloc<R = NSTouchBarCustomizationPaletteDecorationElement>(): R;
      new: <R = NSTouchBarCustomizationPaletteDecorationElement>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteDecorationElement: cocoa.classes.NSTouchBarCustomizationPaletteDecorationElement;
