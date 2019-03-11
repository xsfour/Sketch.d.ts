/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilePresenterAsynchronousOperation<T = any> extends cocoa.NSOperation {
    finish<R = void>(): R;
    isFinished<R = boolean>(): R;
    isExecuting<R = boolean>(): R;
    isAsynchronous<R = boolean>(): R;
  }
  namespace classes {
    export interface NSFilePresenterAsynchronousOperation<T = any> extends cocoa.classes.NSOperation {
      alloc<R = NSFilePresenterAsynchronousOperation>(): R;
      new: <R = NSFilePresenterAsynchronousOperation>() => R;
      operationWithBlock<R = unknown, P0 = cocoa.CDUnknownBlockType>(_operationWithBlock: P0): R;
    }
  }
}

declare const NSFilePresenterAsynchronousOperation: cocoa.classes.NSFilePresenterAsynchronousOperation;
