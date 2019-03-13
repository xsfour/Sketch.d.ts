/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDocumentBasicAsyncOperation<T = any> extends NSOperation {
    finish<R = void>(): R;
    isFinished<R = boolean>(): R;
    isExecuting<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSDocumentBasicAsyncOperation<T = any> extends NSOperation {
      alloc<R = _NSDocumentBasicAsyncOperation>(): R;
      new: <R = _NSDocumentBasicAsyncOperation>() => R;
    }
  }
}
