/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableSet<T = any> {
    // + NSMutableSet(NSCollectionViewAdditions,NSMutableSet,NSPasteboardTypesAdditions,NSPredicateSupport):
    classForCoder<R = unknown>(): R;
    filterUsingPredicate<R = void, P0 = unknown>(_filterUsingPredicate: P0): R;
  }
  namespace classes {
    export interface NSMutableSet<T = any> {
      // + NSMutableSet(NSCollectionViewAdditions,NSMutableSet,NSPasteboardTypesAdditions,NSPredicateSupport):
      setWithCollectionViewIndexPaths<R = unknown, P0 = unknown>(_setWithCollectionViewIndexPaths: P0): R;
      setWithCollectionViewIndexPath<R = unknown, P0 = unknown>(_setWithCollectionViewIndexPath: P0): R;
      _newUniformTypeIdentifierSet<R = unknown>(): R;
    }
  }
}

declare const NSMutableSet: cocoa.classes.NSMutableSet;
