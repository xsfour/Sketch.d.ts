/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBoundedByPredicateOperator<T = any> extends NSPredicateOperator {}
  namespace classes {
    export interface NSBoundedByPredicateOperator<T = any> extends NSPredicateOperator {
      alloc<R = NSBoundedByPredicateOperator>(): R;
      new: <R = NSBoundedByPredicateOperator>() => R;
    }
  }
}

declare const NSBoundedByPredicateOperator: cocoa.classes.NSBoundedByPredicateOperator;
