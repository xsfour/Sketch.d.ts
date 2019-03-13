/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteLayoutAttributes<T = any> extends NSCollectionViewLayoutAttributes {
    isEqual<R = boolean, P0 = unknown>(_isEqual: P0): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    description<R = unknown>(): R;
    scaleFactor<R = number>(): R;
    setScaleFactor<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPaletteLayoutAttributes<T = any> extends NSCollectionViewLayoutAttributes {  }
  }
}

declare const NSTouchBarCustomizationPaletteLayoutAttributes: cocoa.classes.NSTouchBarCustomizationPaletteLayoutAttributes;
