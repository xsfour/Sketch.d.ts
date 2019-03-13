/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMenuServicesViewOperation<T = any> extends NSOperation {
    finishedLoading<R = void, P0 = unknown>(_finishedLoading: P0): R;
    addCompletionBlock<R = void, P0 = CDUnknownBlockType>(_addCompletionBlock: P0): R;
    path<R = NSString>(): R;
    setPath<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface _NSMenuServicesViewOperation<T = any> extends NSOperation {
      alloc<R = _NSMenuServicesViewOperation>(): R;
      new: <R = _NSMenuServicesViewOperation>() => R;
    }
  }
}
