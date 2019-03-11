/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewDelegateFlowLayoutProtocol<T = any> extends cocoa.NSCollectionViewDelegateProtocol {
    collectionView_layout_referenceSizeForFooterInSection<R = cocoa.CGSize, P0 = cocoa.NSCollectionView, P1 = cocoa.NSCollectionViewLayout, P2 = number>(_collectionView: P0, _layout: P1, _referenceSizeForFooterInSection: P2): R;
    collectionView_layout_referenceSizeForHeaderInSection<R = cocoa.CGSize, P0 = cocoa.NSCollectionView, P1 = cocoa.NSCollectionViewLayout, P2 = number>(_collectionView: P0, _layout: P1, _referenceSizeForHeaderInSection: P2): R;
    collectionView_layout_minimumInteritemSpacingForSectionAtIndex<R = number, P0 = cocoa.NSCollectionView, P1 = cocoa.NSCollectionViewLayout, P2 = number>(_collectionView: P0, _layout: P1, _minimumInteritemSpacingForSectionAtIndex: P2): R;
    collectionView_layout_minimumLineSpacingForSectionAtIndex<R = number, P0 = cocoa.NSCollectionView, P1 = cocoa.NSCollectionViewLayout, P2 = number>(_collectionView: P0, _layout: P1, _minimumLineSpacingForSectionAtIndex: P2): R;
    collectionView_layout_insetForSectionAtIndex<R = cocoa.NSEdgeInsets, P0 = cocoa.NSCollectionView, P1 = cocoa.NSCollectionViewLayout, P2 = number>(_collectionView: P0, _layout: P1, _insetForSectionAtIndex: P2): R;
    collectionView_layout_sizeForItemAtIndexPath<R = cocoa.CGSize, P0 = cocoa.NSCollectionView, P1 = cocoa.NSCollectionViewLayout, P2 = cocoa.NSIndexPath>(_collectionView: P0, _layout: P1, _sizeForItemAtIndexPath: P2): R;
  }
  namespace classes {
    export interface NSCollectionViewDelegateFlowLayoutProtocol<T = any> extends cocoa.classes.NSCollectionViewDelegateProtocol {  }
  }
}

declare const NSCollectionViewDelegateFlowLayoutProtocol: cocoa.classes.NSCollectionViewDelegateFlowLayoutProtocol;
