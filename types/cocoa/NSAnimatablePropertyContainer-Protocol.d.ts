/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAnimatablePropertyContainerProtocol<T = any> {
    animationForKey<R = unknown, P0 = cocoa.NSString>(_animationForKey: P0): R;
    animator<R = unknown>(): R;
    animations<R = cocoa.NSDictionary>(): R;
    setAnimations<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
  }
  namespace classes {
    export interface NSAnimatablePropertyContainerProtocol<T = any> {
      defaultAnimationForKey<R = unknown, P0 = cocoa.NSString>(_defaultAnimationForKey: P0): R;
    }
  }
}

declare const NSAnimatablePropertyContainerProtocol: cocoa.classes.NSAnimatablePropertyContainerProtocol;
