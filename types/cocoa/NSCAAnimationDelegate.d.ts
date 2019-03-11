/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCAAnimationDelegate<T = any> extends cocoa.NSObject, cocoa.CAAnimationDelegateProtocol {
    cxx_destruct<R = void>(): R;
    initWithDidEndHandler<R = unknown, P0 = cocoa.CDUnknownBlockType>(_initWithDidEndHandler: P0): R;
    initWithDidStartHandler<R = unknown, P0 = cocoa.CDUnknownBlockType>(_initWithDidStartHandler: P0): R;
    initWithDidStartHandler_didEndHandler<R = unknown, P0 = cocoa.CDUnknownBlockType, P1 = cocoa.CDUnknownBlockType>(_initWithDidStartHandler: P0, _didEndHandler: P1): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSCAAnimationDelegate<T = any> extends cocoa.classes.NSObject, cocoa.classes.CAAnimationDelegateProtocol {
      alloc<R = NSCAAnimationDelegate>(): R;
      new: <R = NSCAAnimationDelegate>() => R;
    }
  }
}

declare const NSCAAnimationDelegate: cocoa.classes.NSCAAnimationDelegate;
