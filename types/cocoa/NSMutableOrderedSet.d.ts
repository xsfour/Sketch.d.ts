/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableOrderedSet<T = any> {
    // + NSMutableOrderedSet(NSKeyValueSorting,NSPredicateSupport):
    sortUsingDescriptors<R = void, P0 = unknown>(_sortUsingDescriptors: P0): R;
    filterUsingPredicate<R = void, P0 = unknown>(_filterUsingPredicate: P0): R;
  }
  namespace classes {
    export interface NSMutableOrderedSet<T = any> {
      // + NSMutableOrderedSet(NSKeyValueSorting,NSPredicateSupport):
      
    }
  }
}

declare const NSMutableOrderedSet: cocoa.classes.NSMutableOrderedSet;
