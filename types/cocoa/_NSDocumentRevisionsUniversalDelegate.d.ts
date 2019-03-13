/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDocumentRevisionsUniversalDelegate<T = any> extends NSObject, CAAnimationDelegateProtocol {
    dealloc<R = void>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSDocumentRevisionsUniversalDelegate<T = any> extends NSObject, CAAnimationDelegateProtocol {
      alloc<R = _NSDocumentRevisionsUniversalDelegate>(): R;
      new: <R = _NSDocumentRevisionsUniversalDelegate>() => R;
      delegateWithBlock<R = unknown, P0 = CDUnknownBlockType>(_delegateWithBlock: P0): R;
    }
  }
}
