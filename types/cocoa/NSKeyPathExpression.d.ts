/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyPathExpression<T = any> extends NSFunctionExpression {
    keyPath<R = unknown>(): R;
    pathExpression<R = unknown>(): R;
    initWithOperand_andKeyPath<R = unknown, P0 = unknown, P1 = unknown>(_initWithOperand: P0, _andKeyPath: P1): R;
    initWithKeyPath<R = unknown, P0 = unknown>(_initWithKeyPath: P0): R;
  }
  namespace classes {
    export interface NSKeyPathExpression<T = any> extends NSFunctionExpression {
      alloc<R = NSKeyPathExpression>(): R;
      new: <R = NSKeyPathExpression>() => R;
    }
  }
}

declare const NSKeyPathExpression: cocoa.classes.NSKeyPathExpression;
