/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStringPredicateOperator<T = any> extends NSPredicateOperator {
    flags<R = number>(): R;
    _modifierString<R = unknown>(): R;
    initWithOperatorType_modifier_variant<R = unknown, P0 = number, P1 = number, P2 = number>(_initWithOperatorType: P0, _modifier: P1, _variant: P2): R;
  }
  namespace classes {
    export interface NSStringPredicateOperator<T = any> extends NSPredicateOperator {
      alloc<R = NSStringPredicateOperator>(): R;
      new: <R = NSStringPredicateOperator>() => R;
    }
  }
}

declare const NSStringPredicateOperator: cocoa.classes.NSStringPredicateOperator;
