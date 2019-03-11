/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewDelegateDFRCustomizationLayoutProtocol<T = any> extends cocoa.NSCollectionViewDelegateProtocol {
    controlStripGrabberStateInCollectionView_layout<R = number, P0 = cocoa.NSCollectionView, P1 = cocoa.NSTouchBarCustomizationPreviewLayout>(_controlStripGrabberStateInCollectionView: P0, _layout: P1): R;
    shouldShowDoneInCollectionView_layout<R = boolean, P0 = cocoa.NSCollectionView, P1 = cocoa.NSTouchBarCustomizationPreviewLayout>(_shouldShowDoneInCollectionView: P0, _layout: P1): R;
    deleteIconDisplayModeInCollectionView_layout<R = number, P0 = cocoa.NSCollectionView, P1 = cocoa.NSTouchBarCustomizationPreviewLayout>(_deleteIconDisplayModeInCollectionView: P0, _layout: P1): R;
    escapeKeyFrameForCollectionView_layout<R = cocoa.CGRect, P0 = cocoa.NSCollectionView, P1 = cocoa.NSTouchBarCustomizationPreviewLayout>(_escapeKeyFrameForCollectionView: P0, _layout: P1): R;
    contentIsAnimatedInCollectionView_layout<R = boolean, P0 = cocoa.NSCollectionView, P1 = cocoa.NSTouchBarCustomizationPreviewLayout>(_contentIsAnimatedInCollectionView: P0, _layout: P1): R;
    collectionView_layout_shouldDisplayBackgroundForSection_withRect<R = boolean, P0 = cocoa.NSCollectionView, P1 = cocoa.NSTouchBarCustomizationPreviewLayout, P2 = number, P3 = cocoa.CGRect>(_collectionView: P0, _layout: P1, _shouldDisplayBackgroundForSection: P2, _withRect: P3): R;
    collectionView_layout_paddingForSection<R = cocoa.NSEdgeInsets, P0 = cocoa.NSCollectionView, P1 = cocoa.NSTouchBarCustomizationPreviewLayout, P2 = number>(_collectionView: P0, _layout: P1, _paddingForSection: P2): R;
    collectionView_layout_shouldDisplayShadeRectForSection<R = boolean, P0 = cocoa.NSCollectionView, P1 = cocoa.NSTouchBarCustomizationPreviewLayout, P2 = number>(_collectionView: P0, _layout: P1, _shouldDisplayShadeRectForSection: P2): R;
    collectionView_layout_containmentFrameForSection<R = cocoa.CGRect, P0 = cocoa.NSCollectionView, P1 = cocoa.NSTouchBarCustomizationPreviewLayout, P2 = number>(_collectionView: P0, _layout: P1, _containmentFrameForSection: P2): R;
    collectionView_layout_sectionLayoutForSection<R = cocoa.NSTouchBarCustomizationPreviewSectionLayout, P0 = cocoa.NSCollectionView, P1 = cocoa.NSTouchBarCustomizationPreviewLayout, P2 = number>(_collectionView: P0, _layout: P1, _sectionLayoutForSection: P2): R;
  }
  namespace classes {
    export interface NSCollectionViewDelegateDFRCustomizationLayoutProtocol<T = any> extends cocoa.classes.NSCollectionViewDelegateProtocol {  }
  }
}

declare const NSCollectionViewDelegateDFRCustomizationLayoutProtocol: cocoa.classes.NSCollectionViewDelegateDFRCustomizationLayoutProtocol;
