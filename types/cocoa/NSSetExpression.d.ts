/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSetExpression<T = any> extends cocoa.NSExpression {
    rightExpression<R = unknown>(): R;
    leftExpression<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithType_leftExpression_rightExpression<R = unknown, P0 = number, P1 = unknown, P2 = unknown>(_initWithType: P0, _leftExpression: P1, _rightExpression: P2): R;
  }
  namespace classes {
    export interface NSSetExpression<T = any> extends cocoa.classes.NSExpression {
      alloc<R = NSSetExpression>(): R;
      new: <R = NSSetExpression>() => R;
    }
  }
}

declare const NSSetExpression: cocoa.classes.NSSetExpression;
