/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewControllerPushTransition<T = any> extends cocoa.NSViewControllerPresentationAnimatorObject {}
  namespace classes {
    export interface NSViewControllerPushTransition<T = any> extends cocoa.classes.NSViewControllerPresentationAnimatorObject {
      alloc<R = NSViewControllerPushTransition>(): R;
      new: <R = NSViewControllerPushTransition>() => R;
    }
  }
}

declare const NSViewControllerPushTransition: cocoa.classes.NSViewControllerPushTransition;
