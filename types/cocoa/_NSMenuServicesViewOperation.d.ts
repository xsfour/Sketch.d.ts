/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMenuServicesViewOperation<T = any> extends cocoa.NSOperation {
    finishedLoading<R = void, P0 = unknown>(_finishedLoading: P0): R;
    addCompletionBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_addCompletionBlock: P0): R;
    path<R = cocoa.NSString>(): R;
    setPath<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface _NSMenuServicesViewOperation<T = any> extends cocoa.classes.NSOperation {
      alloc<R = _NSMenuServicesViewOperation>(): R;
      new: <R = _NSMenuServicesViewOperation>() => R;
    }
  }
}
