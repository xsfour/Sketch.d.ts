/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBlockOperation<T = any> extends cocoa.NSOperation {
    addExecutionBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_addExecutionBlock: P0): R;
    initWithBlock<R = unknown, P0 = cocoa.CDUnknownBlockType>(_initWithBlock: P0): R;
    executionBlocks<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface NSBlockOperation<T = any> extends cocoa.classes.NSOperation {
      alloc<R = NSBlockOperation>(): R;
      new: <R = NSBlockOperation>() => R;
      blockOperationWithBlock<R = unknown, P0 = cocoa.CDUnknownBlockType>(_blockOperationWithBlock: P0): R;
    }
  }
}

declare const NSBlockOperation: cocoa.classes.NSBlockOperation;
