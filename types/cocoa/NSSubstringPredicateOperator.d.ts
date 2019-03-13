/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSubstringPredicateOperator<T = any> extends NSStringPredicateOperator {
    position<R = number>(): R;
    initWithOperatorType_modifier_variant_position<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_initWithOperatorType: P0, _modifier: P1, _variant: P2, _position: P3): R;
  }
  namespace classes {
    export interface NSSubstringPredicateOperator<T = any> extends NSStringPredicateOperator {
      alloc<R = NSSubstringPredicateOperator>(): R;
      new: <R = NSSubstringPredicateOperator>() => R;
    }
  }
}

declare const NSSubstringPredicateOperator: cocoa.classes.NSSubstringPredicateOperator;
