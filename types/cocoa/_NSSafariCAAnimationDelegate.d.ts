/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSafariCAAnimationDelegate<T = any> extends cocoa.NSObject, cocoa.CAAnimationDelegateProtocol {
    cxx_destruct<R = void>(): R;
    animationDidStopBlock<R = cocoa.CDUnknownBlockType>(): R;
    setAnimationDidStopBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSSafariCAAnimationDelegate<T = any> extends cocoa.classes.NSObject, cocoa.classes.CAAnimationDelegateProtocol {
      alloc<R = _NSSafariCAAnimationDelegate>(): R;
      new: <R = _NSSafariCAAnimationDelegate>() => R;
    }
  }
}
