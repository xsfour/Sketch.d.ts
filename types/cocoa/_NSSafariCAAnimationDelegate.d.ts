/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSafariCAAnimationDelegate<T = any> extends NSObject, CAAnimationDelegateProtocol {
    cxx_destruct<R = void>(): R;
    animationDidStopBlock<R = CDUnknownBlockType>(): R;
    setAnimationDidStopBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSSafariCAAnimationDelegate<T = any> extends NSObject, CAAnimationDelegateProtocol {
      alloc<R = _NSSafariCAAnimationDelegate>(): R;
      new: <R = _NSSafariCAAnimationDelegate>() => R;
    }
  }
}
