/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSymbolicExpression<T = any> extends NSExpression {
    hash<R = number>(): R;
    constantValue<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithString<R = unknown, P0 = unknown>(_initWithString: P0): R;
  }
  namespace classes {
    export interface NSSymbolicExpression<T = any> extends NSExpression {
      alloc<R = NSSymbolicExpression>(): R;
      new: <R = NSSymbolicExpression>() => R;
    }
  }
}

declare const NSSymbolicExpression: cocoa.classes.NSSymbolicExpression;
