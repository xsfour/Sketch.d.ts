/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerFavoritesCollectionView<T = any> extends cocoa.NSCollectionView {}
  namespace classes {
    export interface NSTouchBarColorPickerFavoritesCollectionView<T = any> extends cocoa.classes.NSCollectionView {
      alloc<R = NSTouchBarColorPickerFavoritesCollectionView>(): R;
      new: <R = NSTouchBarColorPickerFavoritesCollectionView>() => R;
    }
  }
}

declare const NSTouchBarColorPickerFavoritesCollectionView: cocoa.classes.NSTouchBarColorPickerFavoritesCollectionView;
