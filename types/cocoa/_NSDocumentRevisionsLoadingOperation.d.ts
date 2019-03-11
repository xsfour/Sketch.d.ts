/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDocumentRevisionsLoadingOperation<T = any> extends cocoa.NSOperation {
    setCompletionBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_setCompletionBlock: P0): R;
    addDocumentConsumer<R = void, P0 = cocoa.CDUnknownBlockType>(_addDocumentConsumer: P0): R;
    _documentLoadingDidComplete<R = void>(): R;
    initWithVersion<R = unknown, P0 = unknown>(_initWithVersion: P0): R;
    document<R = cocoa.NSDocument>(): R;
    setDocument<R = void, P0 = cocoa.NSDocument>(_v: P0): R;
  }
  namespace classes {
    export interface _NSDocumentRevisionsLoadingOperation<T = any> extends cocoa.classes.NSOperation {
      alloc<R = _NSDocumentRevisionsLoadingOperation>(): R;
      new: <R = _NSDocumentRevisionsLoadingOperation>() => R;
    }
  }
}
