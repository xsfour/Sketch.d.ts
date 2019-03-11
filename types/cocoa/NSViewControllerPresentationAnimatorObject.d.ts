/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewControllerPresentationAnimatorObject<T = any> extends cocoa.NSObject, cocoa.NSViewControllerPresentationAnimatorProtocol {
    dealloc<R = void>(): R;
    completionHandler<R = cocoa.CDUnknownBlockType>(): R;
    setCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    toViewController<R = cocoa.NSViewController>(): R;
    setToViewController<R = void, P0 = cocoa.NSViewController>(_v: P0): R;
    fromViewController<R = cocoa.NSViewController>(): R;
    setFromViewController<R = void, P0 = cocoa.NSViewController>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSViewControllerPresentationAnimatorObject<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSViewControllerPresentationAnimatorProtocol {
      alloc<R = NSViewControllerPresentationAnimatorObject>(): R;
      new: <R = NSViewControllerPresentationAnimatorObject>() => R;
    }
  }
}

declare const NSViewControllerPresentationAnimatorObject: cocoa.classes.NSViewControllerPresentationAnimatorObject;
