/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVariableExpression<T = any> extends cocoa.NSExpression {
    hash<R = number>(): R;
    variable<R = unknown>(): R;
    initWithObject<R = unknown, P0 = unknown>(_initWithObject: P0): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSVariableExpression<T = any> extends cocoa.classes.NSExpression {
      alloc<R = NSVariableExpression>(): R;
      new: <R = NSVariableExpression>() => R;
    }
  }
}

declare const NSVariableExpression: cocoa.classes.NSVariableExpression;
