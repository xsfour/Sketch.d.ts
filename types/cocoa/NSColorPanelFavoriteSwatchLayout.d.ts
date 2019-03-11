/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPanelFavoriteSwatchLayout<T = any> extends cocoa.NSCollectionViewLayout {
    layoutAttributesForInterItemGapBeforeIndexPath<R = unknown, P0 = unknown>(_layoutAttributesForInterItemGapBeforeIndexPath: P0): R;
    layoutAttributesForDropTargetAtPoint<R = unknown, P0 = cocoa.CGPoint>(_layoutAttributesForDropTargetAtPoint: P0): R;
    collectionViewContentSize<R = cocoa.CGSize>(): R;
    enclosingBounds<R = cocoa.CGRect>(): R;
    shouldInvalidateLayoutForBoundsChange<R = boolean, P0 = cocoa.CGRect>(_shouldInvalidateLayoutForBoundsChange: P0): R;
    layoutAttributesForItemAtIndexPath<R = unknown, P0 = unknown>(_layoutAttributesForItemAtIndexPath: P0): R;
    layoutAttributesForElementsInRect<R = unknown, P0 = cocoa.CGRect>(_layoutAttributesForElementsInRect: P0): R;
    numberOfItemsFittingInBoundsWidth<R = number, P0 = number>(_numberOfItemsFittingInBoundsWidth: P0): R;
    layoutAttributesForDecorationViewOfKind_atIndexPath<R = unknown, P0 = unknown, P1 = unknown>(_layoutAttributesForDecorationViewOfKind: P0, _atIndexPath: P1): R;
    init<R = unknown>(): R;
    sectionInset<R = cocoa.NSEdgeInsets>(): R;
    setSectionInset<R = void, P0 = cocoa.NSEdgeInsets>(_v: P0): R;
    itemSpacing<R = number>(): R;
    setItemSpacing<R = void, P0 = number>(_v: P0): R;
    itemSize<R = cocoa.CGSize>(): R;
    setItemSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
  }
  namespace classes {
    export interface NSColorPanelFavoriteSwatchLayout<T = any> extends cocoa.classes.NSCollectionViewLayout {  }
  }
}

declare const NSColorPanelFavoriteSwatchLayout: cocoa.classes.NSColorPanelFavoriteSwatchLayout;
