/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewGridLayout<T = any> extends cocoa.NSCollectionViewLayout {
    dealloc<R = void>(): R;
    _shouldRelayoutImmediatelyForNewCollectionViewSize<R = boolean>(): R;
    shouldInvalidateLayoutForBoundsChange<R = boolean, P0 = cocoa.CGRect>(_shouldInvalidateLayoutForBoundsChange: P0): R;
    layoutAttributesForInterItemGapBeforeIndexPath<R = unknown, P0 = unknown>(_layoutAttributesForInterItemGapBeforeIndexPath: P0): R;
    layoutAttributesForDropTargetAtPoint<R = unknown, P0 = cocoa.CGPoint>(_layoutAttributesForDropTargetAtPoint: P0): R;
    layoutAttributesForItemAtIndexPath<R = unknown, P0 = unknown>(_layoutAttributesForItemAtIndexPath: P0): R;
    layoutAttributesForElementsInRect<R = unknown, P0 = cocoa.CGRect>(_layoutAttributesForElementsInRect: P0): R;
    collectionViewContentSize<R = cocoa.CGSize>(): R;
    prepareLayout<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    init<R = unknown>(): R;
    _hitTestPoint_usingBlock<R = void, P0 = cocoa.CGPoint, P1 = cocoa.CDUnknownBlockType>(__hitTestPoint: P0, _usingBlock: P1): R;
    _updateGridSettingsWithPrototype<R = void>(): R;
    scrollDirection<R = number>(): R;
    _filledViewShouldExtendVertically<R = boolean>(): R;
    _computeGridConfigurationWithSize<R = unknown, P0 = cocoa.CGSize>(__computeGridConfigurationWithSize: P0): R;
    _computeGridConfigurationWithSize_count<R = unknown, P0 = cocoa.CGSize, P1 = number>(__computeGridConfigurationWithSize: P0, _count: P1): R;
    _computeGridConfiguration<R = unknown>(): R;
    _computeGridConfigurationWithCount<R = unknown, P0 = number>(__computeGridConfigurationWithCount: P0): R;
    _currentGridConfiguration<R = unknown>(): R;
    backgroundColors<R = cocoa.NSArray>(): R;
    setBackgroundColors<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    maximumItemSize<R = cocoa.CGSize>(): R;
    setMaximumItemSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    minimumItemSize<R = cocoa.CGSize>(): R;
    setMinimumItemSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    maximumNumberOfColumns<R = number>(): R;
    setMaximumNumberOfColumns<R = void, P0 = number>(_v: P0): R;
    maximumNumberOfRows<R = number>(): R;
    setMaximumNumberOfRows<R = void, P0 = number>(_v: P0): R;
    minimumLineSpacing<R = number>(): R;
    setMinimumLineSpacing<R = void, P0 = number>(_v: P0): R;
    minimumInteritemSpacing<R = number>(): R;
    setMinimumInteritemSpacing<R = void, P0 = number>(_v: P0): R;
    margins<R = cocoa.NSEdgeInsets>(): R;
    setMargins<R = void, P0 = cocoa.NSEdgeInsets>(_v: P0): R;
  }
  namespace classes {
    export interface NSCollectionViewGridLayout<T = any> extends cocoa.classes.NSCollectionViewLayout {
      itemLayoutIsSequential<R = boolean>(): R;
    }
  }
}

declare const NSCollectionViewGridLayout: cocoa.classes.NSCollectionViewGridLayout;
