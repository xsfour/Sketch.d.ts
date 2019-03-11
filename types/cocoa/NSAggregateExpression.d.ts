/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAggregateExpression<T = any> extends cocoa.NSExpression {
    hash<R = number>(): R;
    collection<R = unknown>(): R;
    constantValue<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithCollection<R = unknown, P0 = unknown>(_initWithCollection: P0): R;
  }
  namespace classes {
    export interface NSAggregateExpression<T = any> extends cocoa.classes.NSExpression {
      alloc<R = NSAggregateExpression>(): R;
      new: <R = NSAggregateExpression>() => R;
    }
  }
}

declare const NSAggregateExpression: cocoa.classes.NSAggregateExpression;
