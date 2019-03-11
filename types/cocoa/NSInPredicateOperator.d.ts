/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInPredicateOperator<T = any> extends cocoa.NSPredicateOperator {
    flags<R = number>(): R;
    dealloc<R = void>(): R;
    stringVersion<R = unknown>(): R;
  }
  namespace classes {
    export interface NSInPredicateOperator<T = any> extends cocoa.classes.NSPredicateOperator {
      alloc<R = NSInPredicateOperator>(): R;
      new: <R = NSInPredicateOperator>() => R;
    }
  }
}

declare const NSInPredicateOperator: cocoa.classes.NSInPredicateOperator;
