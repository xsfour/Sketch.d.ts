/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBetweenPredicateOperator<T = any> extends NSPredicateOperator {}
  namespace classes {
    export interface NSBetweenPredicateOperator<T = any> extends NSPredicateOperator {
      alloc<R = NSBetweenPredicateOperator>(): R;
      new: <R = NSBetweenPredicateOperator>() => R;
    }
  }
}

declare const NSBetweenPredicateOperator: cocoa.classes.NSBetweenPredicateOperator;
