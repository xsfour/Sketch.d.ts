/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTokenMatchingPredicateOperator<T = any> extends cocoa.NSStringPredicateOperator {}
  namespace classes {
    export interface NSTokenMatchingPredicateOperator<T = any> extends cocoa.classes.NSStringPredicateOperator {
      alloc<R = NSTokenMatchingPredicateOperator>(): R;
      new: <R = NSTokenMatchingPredicateOperator>() => R;
    }
  }
}

declare const NSTokenMatchingPredicateOperator: cocoa.classes.NSTokenMatchingPredicateOperator;
