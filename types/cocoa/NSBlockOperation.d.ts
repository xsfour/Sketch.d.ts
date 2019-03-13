/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBlockOperation<T = any> extends NSOperation {
    addExecutionBlock<R = void, P0 = CDUnknownBlockType>(_addExecutionBlock: P0): R;
    initWithBlock<R = unknown, P0 = CDUnknownBlockType>(_initWithBlock: P0): R;
    executionBlocks<R = NSArray>(): R;
  }
  namespace classes {
    export interface NSBlockOperation<T = any> extends NSOperation {
      alloc<R = NSBlockOperation>(): R;
      new: <R = NSBlockOperation>() => R;
      blockOperationWithBlock<R = unknown, P0 = CDUnknownBlockType>(_blockOperationWithBlock: P0): R;
    }
  }
}

declare const NSBlockOperation: cocoa.classes.NSBlockOperation;
