/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLikePredicateOperator<T = any> extends cocoa.NSMatchingPredicateOperator {}
  namespace classes {
    export interface NSLikePredicateOperator<T = any> extends cocoa.classes.NSMatchingPredicateOperator {
      alloc<R = NSLikePredicateOperator>(): R;
      new: <R = NSLikePredicateOperator>() => R;
    }
  }
}

declare const NSLikePredicateOperator: cocoa.classes.NSLikePredicateOperator;
