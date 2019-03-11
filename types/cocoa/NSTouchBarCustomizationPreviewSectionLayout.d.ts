/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewSectionLayout<T = any> extends cocoa.NSObject {
    canInsertItem_atIndex<R = boolean, P0 = unknown, P1 = number>(_canInsertItem: P0, _atIndex: P1): R;
    overlappedIndexesForMovingItemAtIndex_toIndex_withFrame_primaryLocation<R = unknown, P0 = number, P1 = number, P2 = cocoa.CGRect, P3 = cocoa.CGPoint>(_overlappedIndexesForMovingItemAtIndex: P0, _toIndex: P1, _withFrame: P2, _primaryLocation: P3): R;
    canMoveItemAtIndex_toIndex_byRemovingItems<R = unknown, P0 = number, P1 = number, P2 = unknown>(_canMoveItemAtIndex: P0, _toIndex: P1, _byRemovingItems: P2): R;
    canMoveItemAtIndex_toIndex<R = boolean, P0 = number, P1 = number>(_canMoveItemAtIndex: P0, _toIndex: P1): R;
    invalidateLayout<R = void>(): R;
    prepareLayout<R = void>(): R;
    layoutAttributesForItemAtIndex<R = unknown, P0 = number>(_layoutAttributesForItemAtIndex: P0): R;
    layoutAttributesForItemsInRect<R = unknown, P0 = cocoa.CGRect>(_layoutAttributesForItemsInRect: P0): R;
    dealloc<R = void>(): R;
    initWithDelegate_section<R = unknown, P0 = unknown, P1 = number>(_initWithDelegate: P0, _section: P1): R;
    accessibilityDescription<R = cocoa.NSString>(): R;
    setAccessibilityDescription<R = void, P0 = cocoa.NSString>(_v: P0): R;
    identifier<R = cocoa.NSString>(): R;
    setIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    cachedContainmentRect<R = cocoa.CGRect>(): R;
    setCachedContainmentRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    cachedLayoutAttributes<R = cocoa.NSArray>(): R;
    setCachedLayoutAttributes<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    section<R = number>(): R;
    delegate<R = cocoa.NSTouchBarCustomizationPreviewSectionLayoutDelegate>(): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPreviewSectionLayout<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSTouchBarCustomizationPreviewSectionLayout>(): R;
      new: <R = NSTouchBarCustomizationPreviewSectionLayout>() => R;
      layoutAttributesClass<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewSectionLayout: cocoa.classes.NSTouchBarCustomizationPreviewSectionLayout;
