/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteLayoutDelegateProtocol<T = any> extends cocoa.NSCollectionViewDelegateProtocol {
    collectionView_layout_maxSizeForItemAtIndexPath<R = cocoa.CGSize, P0 = cocoa.NSCollectionView, P1 = cocoa.NSCollectionViewLayout, P2 = cocoa.NSIndexPath>(_collectionView: P0, _layout: P1, _maxSizeForItemAtIndexPath: P2): R;
    collectionView_layout_minSizeForItemAtIndexPath<R = cocoa.CGSize, P0 = cocoa.NSCollectionView, P1 = cocoa.NSCollectionViewLayout, P2 = cocoa.NSIndexPath>(_collectionView: P0, _layout: P1, _minSizeForItemAtIndexPath: P2): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPaletteLayoutDelegateProtocol<T = any> extends cocoa.classes.NSCollectionViewDelegateProtocol {  }
  }
}

declare const NSTouchBarCustomizationPaletteLayoutDelegateProtocol: cocoa.classes.NSTouchBarCustomizationPaletteLayoutDelegateProtocol;
