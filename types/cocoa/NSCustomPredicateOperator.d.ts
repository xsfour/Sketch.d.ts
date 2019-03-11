/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCustomPredicateOperator<T = any> extends cocoa.NSPredicateOperator {
    initWithCustomSelector_modifier<R = unknown, P0 = string, P1 = number>(_initWithCustomSelector: P0, _modifier: P1): R;
  }
  namespace classes {
    export interface NSCustomPredicateOperator<T = any> extends cocoa.classes.NSPredicateOperator {
      alloc<R = NSCustomPredicateOperator>(): R;
      new: <R = NSCustomPredicateOperator>() => R;
    }
  }
}

declare const NSCustomPredicateOperator: cocoa.classes.NSCustomPredicateOperator;
