/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteLayoutDelegateProtocol<T = any> extends NSCollectionViewDelegateProtocol {
    collectionView_layout_maxSizeForItemAtIndexPath<R = CGSize, P0 = NSCollectionView, P1 = NSCollectionViewLayout, P2 = NSIndexPath>(_collectionView: P0, _layout: P1, _maxSizeForItemAtIndexPath: P2): R;
    collectionView_layout_minSizeForItemAtIndexPath<R = CGSize, P0 = NSCollectionView, P1 = NSCollectionViewLayout, P2 = NSIndexPath>(_collectionView: P0, _layout: P1, _minSizeForItemAtIndexPath: P2): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPaletteLayoutDelegateProtocol<T = any> extends NSCollectionViewDelegateProtocol {  }
  }
}
