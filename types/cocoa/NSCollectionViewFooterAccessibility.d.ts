/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewFooterAccessibility<T = any> extends cocoa.NSCollectionViewSupplementaryViewAccessibility {
    accessibilityIndex<R = number>(): R;
  }
  namespace classes {
    export interface NSCollectionViewFooterAccessibility<T = any> extends cocoa.classes.NSCollectionViewSupplementaryViewAccessibility {
      alloc<R = NSCollectionViewFooterAccessibility>(): R;
      new: <R = NSCollectionViewFooterAccessibility>() => R;
    }
  }
}

declare const NSCollectionViewFooterAccessibility: cocoa.classes.NSCollectionViewFooterAccessibility;
