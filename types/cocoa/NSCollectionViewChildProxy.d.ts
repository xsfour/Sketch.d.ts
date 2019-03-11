/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewChildProxy<T = any> extends cocoa.NSAccessibilityProxy {
    accessibilityIsSizeAttributeSettable<R = boolean>(): R;
    accessibilitySizeAttribute<R = unknown>(): R;
    accessibilityIsPositionAttributeSettable<R = boolean>(): R;
    accessibilityPositionAttribute<R = unknown>(): R;
    accessibilityIsWindowAttributeSettable<R = boolean>(): R;
    accessibilityWindowAttribute<R = unknown>(): R;
    accessibilityIsChildrenAttributeSettable<R = boolean>(): R;
    accessibilityIsParentAttributeSettable<R = boolean>(): R;
    accessibilityParentAttribute<R = unknown>(): R;
    item<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithIndex_collectionView<R = unknown, P0 = number, P1 = unknown>(_initWithIndex: P0, _collectionView: P1): R;
  }
  namespace classes {
    export interface NSCollectionViewChildProxy<T = any> extends cocoa.classes.NSAccessibilityProxy {
      alloc<R = NSCollectionViewChildProxy>(): R;
      new: <R = NSCollectionViewChildProxy>() => R;
      proxyForItemAtIndex_collectionView<R = unknown, P0 = number, P1 = unknown>(_proxyForItemAtIndex: P0, _collectionView: P1): R;
    }
  }
}

declare const NSCollectionViewChildProxy: cocoa.classes.NSCollectionViewChildProxy;
