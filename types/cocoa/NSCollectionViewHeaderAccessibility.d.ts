/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewHeaderAccessibility<T = any> extends cocoa.NSCollectionViewSupplementaryViewAccessibility {
    accessibilityIndex<R = number>(): R;
  }
  namespace classes {
    export interface NSCollectionViewHeaderAccessibility<T = any> extends cocoa.classes.NSCollectionViewSupplementaryViewAccessibility {
      alloc<R = NSCollectionViewHeaderAccessibility>(): R;
      new: <R = NSCollectionViewHeaderAccessibility>() => R;
    }
  }
}

declare const NSCollectionViewHeaderAccessibility: cocoa.classes.NSCollectionViewHeaderAccessibility;
