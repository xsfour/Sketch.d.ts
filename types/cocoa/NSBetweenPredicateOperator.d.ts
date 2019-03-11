/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBetweenPredicateOperator<T = any> extends cocoa.NSPredicateOperator {}
  namespace classes {
    export interface NSBetweenPredicateOperator<T = any> extends cocoa.classes.NSPredicateOperator {
      alloc<R = NSBetweenPredicateOperator>(): R;
      new: <R = NSBetweenPredicateOperator>() => R;
    }
  }
}

declare const NSBetweenPredicateOperator: cocoa.classes.NSBetweenPredicateOperator;
