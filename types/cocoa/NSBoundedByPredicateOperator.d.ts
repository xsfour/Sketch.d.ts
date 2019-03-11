/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBoundedByPredicateOperator<T = any> extends cocoa.NSPredicateOperator {}
  namespace classes {
    export interface NSBoundedByPredicateOperator<T = any> extends cocoa.classes.NSPredicateOperator {
      alloc<R = NSBoundedByPredicateOperator>(): R;
      new: <R = NSBoundedByPredicateOperator>() => R;
    }
  }
}

declare const NSBoundedByPredicateOperator: cocoa.classes.NSBoundedByPredicateOperator;
