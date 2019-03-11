/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUTIPredicateOperator<T = any> extends cocoa.NSPredicateOperator {
    variant<R = number>(): R;
    initForVariant<R = unknown, P0 = number>(_initForVariant: P0): R;
  }
  namespace classes {
    export interface NSUTIPredicateOperator<T = any> extends cocoa.classes.NSPredicateOperator {
      alloc<R = NSUTIPredicateOperator>(): R;
      new: <R = NSUTIPredicateOperator>() => R;
    }
  }
}

declare const NSUTIPredicateOperator: cocoa.classes.NSUTIPredicateOperator;
