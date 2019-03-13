/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSelfExpression<T = any> extends NSExpression {
    _initPrivate<R = unknown>(): R;
    hash<R = number>(): R;
    _tryRetain<R = boolean>(): R;
    _isDeallocating<R = boolean>(): R;
  }
  namespace classes {
    export interface NSSelfExpression<T = any> extends NSExpression {
      alloc<R = NSSelfExpression>(): R;
      new: <R = NSSelfExpression>() => R;
      defaultInstance<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSSelfExpression: cocoa.classes.NSSelfExpression;
