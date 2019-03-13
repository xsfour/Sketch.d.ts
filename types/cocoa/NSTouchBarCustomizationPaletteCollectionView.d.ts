/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteCollectionView<T = any> extends NSCollectionView {}
  namespace classes {
    export interface NSTouchBarCustomizationPaletteCollectionView<T = any> extends NSCollectionView {
      alloc<R = NSTouchBarCustomizationPaletteCollectionView>(): R;
      new: <R = NSTouchBarCustomizationPaletteCollectionView>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteCollectionView: cocoa.classes.NSTouchBarCustomizationPaletteCollectionView;
