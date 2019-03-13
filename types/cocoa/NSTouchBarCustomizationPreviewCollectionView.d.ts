/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewCollectionView<T = any> extends NSCollectionView {}
  namespace classes {
    export interface NSTouchBarCustomizationPreviewCollectionView<T = any> extends NSCollectionView {
      alloc<R = NSTouchBarCustomizationPreviewCollectionView>(): R;
      new: <R = NSTouchBarCustomizationPreviewCollectionView>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewCollectionView: cocoa.classes.NSTouchBarCustomizationPreviewCollectionView;
