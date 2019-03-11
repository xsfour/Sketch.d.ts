/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDocumentRevisionsUniversalDelegate<T = any> extends cocoa.NSObject, cocoa.CAAnimationDelegateProtocol {
    dealloc<R = void>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSDocumentRevisionsUniversalDelegate<T = any> extends cocoa.classes.NSObject, cocoa.classes.CAAnimationDelegateProtocol {
      alloc<R = _NSDocumentRevisionsUniversalDelegate>(): R;
      new: <R = _NSDocumentRevisionsUniversalDelegate>() => R;
      delegateWithBlock<R = unknown, P0 = cocoa.CDUnknownBlockType>(_delegateWithBlock: P0): R;
    }
  }
}
