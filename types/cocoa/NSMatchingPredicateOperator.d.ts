/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMatchingPredicateOperator<T = any> extends NSStringPredicateOperator {
    _shouldEscapeForLike<R = boolean>(): R;
    dealloc<R = void>(): R;
    _clearContext<R = void>(): R;
  }
  namespace classes {
    export interface NSMatchingPredicateOperator<T = any> extends NSStringPredicateOperator {
      alloc<R = NSMatchingPredicateOperator>(): R;
      new: <R = NSMatchingPredicateOperator>() => R;
    }
  }
}

declare const NSMatchingPredicateOperator: cocoa.classes.NSMatchingPredicateOperator;
