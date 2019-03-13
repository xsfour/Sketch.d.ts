/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewFooterAccessibility<T = any> extends NSCollectionViewSupplementaryViewAccessibility {
    accessibilityIndex<R = number>(): R;
  }
  namespace classes {
    export interface NSCollectionViewFooterAccessibility<T = any> extends NSCollectionViewSupplementaryViewAccessibility {
      alloc<R = NSCollectionViewFooterAccessibility>(): R;
      new: <R = NSCollectionViewFooterAccessibility>() => R;
    }
  }
}

declare const NSCollectionViewFooterAccessibility: cocoa.classes.NSCollectionViewFooterAccessibility;
