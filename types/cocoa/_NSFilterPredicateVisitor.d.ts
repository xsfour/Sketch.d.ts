/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFilterPredicateVisitor<T = any> extends NSObject, NSPredicateVisitorProtocol {
    result<R = unknown>(): R;
    substitutedValueForPredicate<R = unknown, P0 = unknown>(_substitutedValueForPredicate: P0): R;
    reset<R = void>(): R;
    dealloc<R = void>(): R;
    initWithPredicate<R = unknown, P0 = unknown>(_initWithPredicate: P0): R;
  }
  namespace classes {
    export interface _NSFilterPredicateVisitor<T = any> extends NSObject, NSPredicateVisitorProtocol {
      alloc<R = _NSFilterPredicateVisitor>(): R;
      new: <R = _NSFilterPredicateVisitor>() => R;
    }
  }
}
