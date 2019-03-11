/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBlockAnimation<T = any> extends cocoa.CABasicAnimation, cocoa.CAAnimationDelegateProtocol {
    cxx_destruct<R = void>(): R;
    initWithBlock<R = unknown, P0 = cocoa.CDUnknownBlockType>(_initWithBlock: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSBlockAnimation<T = any> extends cocoa.classes.CABasicAnimation, cocoa.classes.CAAnimationDelegateProtocol {  }
  }
}

declare const MSBlockAnimation: cocoa.classes.MSBlockAnimation;
