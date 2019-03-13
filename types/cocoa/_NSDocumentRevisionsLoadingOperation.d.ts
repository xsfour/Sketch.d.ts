/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDocumentRevisionsLoadingOperation<T = any> extends NSOperation {
    setCompletionBlock<R = void, P0 = CDUnknownBlockType>(_setCompletionBlock: P0): R;
    addDocumentConsumer<R = void, P0 = CDUnknownBlockType>(_addDocumentConsumer: P0): R;
    _documentLoadingDidComplete<R = void>(): R;
    initWithVersion<R = unknown, P0 = unknown>(_initWithVersion: P0): R;
    document<R = NSDocument>(): R;
    setDocument<R = void, P0 = NSDocument>(_v: P0): R;
  }
  namespace classes {
    export interface _NSDocumentRevisionsLoadingOperation<T = any> extends NSOperation {
      alloc<R = _NSDocumentRevisionsLoadingOperation>(): R;
      new: <R = _NSDocumentRevisionsLoadingOperation>() => R;
    }
  }
}
