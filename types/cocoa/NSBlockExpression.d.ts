/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBlockExpression<T = any> extends NSExpression {
    arguments<R = unknown>(): R;
    expressionBlock<R = CDUnknownBlockType>(): R;
    dealloc<R = void>(): R;
    initWithType_block_arguments<R = unknown, P0 = number, P1 = CDUnknownBlockType, P2 = unknown>(_initWithType: P0, _block: P1, _arguments: P2): R;
  }
  namespace classes {
    export interface NSBlockExpression<T = any> extends NSExpression {
      alloc<R = NSBlockExpression>(): R;
      new: <R = NSBlockExpression>() => R;
    }
  }
}

declare const NSBlockExpression: cocoa.classes.NSBlockExpression;
