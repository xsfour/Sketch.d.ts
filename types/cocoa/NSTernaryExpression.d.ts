/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTernaryExpression<T = any> extends NSExpression {
    falseExpression<R = unknown>(): R;
    trueExpression<R = unknown>(): R;
    predicate<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithPredicate_trueExpression_falseExpression<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithPredicate: P0, _trueExpression: P1, _falseExpression: P2): R;
  }
  namespace classes {
    export interface NSTernaryExpression<T = any> extends NSExpression {
      alloc<R = NSTernaryExpression>(): R;
      new: <R = NSTernaryExpression>() => R;
    }
  }
}

declare const NSTernaryExpression: cocoa.classes.NSTernaryExpression;
