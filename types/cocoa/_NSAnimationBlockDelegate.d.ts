/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAnimationBlockDelegate<T = any> extends cocoa.NSObject, cocoa.NSAnimationDelegateProtocol {
    dealloc<R = void>(): R;
    initWithBlock<R = unknown, P0 = cocoa.CDUnknownBlockType>(_initWithBlock: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSAnimationBlockDelegate<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSAnimationDelegateProtocol {
      alloc<R = _NSAnimationBlockDelegate>(): R;
      new: <R = _NSAnimationBlockDelegate>() => R;
    }
  }
}
