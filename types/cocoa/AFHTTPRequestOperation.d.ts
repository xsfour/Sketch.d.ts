/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFHTTPRequestOperation<T = any> extends cocoa.AFURLConnectionOperation {
    setCompletionBlockWithSuccess_failure<R = void, P0 = cocoa.CDUnknownBlockType, P1 = cocoa.CDUnknownBlockType>(_setCompletionBlockWithSuccess: P0, _failure: P1): R;
    error<R = unknown>(): R;
    responseSerializationError<R = cocoa.NSError>(): R;
    setResponseSerializationError<R = void, P0 = cocoa.NSError>(_v: P0): R;
    responseObject<R = unknown>(): R;
    setResponseObject<R = void, P0 = unknown>(_v: P0): R;
    responseSerializer<R = cocoa.AFURLResponseSerialization>(): R;
    setResponseSerializer<R = void, P0 = cocoa.AFURLResponseSerialization>(_v: P0): R;
    lock<R = cocoa.NSRecursiveLock>(): R;
    setLock<R = void, P0 = cocoa.NSRecursiveLock>(_v: P0): R;
    response<R = cocoa.NSHTTPURLResponse>(): R;
    setResponse<R = void, P0 = cocoa.NSHTTPURLResponse>(_v: P0): R;
  }
  namespace classes {
    export interface AFHTTPRequestOperation<T = any> extends cocoa.classes.AFURLConnectionOperation {
      alloc<R = AFHTTPRequestOperation>(): R;
      new: <R = AFHTTPRequestOperation>() => R;
    }
  }
}

declare const AFHTTPRequestOperation: cocoa.classes.AFHTTPRequestOperation;
