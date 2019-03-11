/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewControllerWindowTransition<T = any> extends cocoa.NSViewControllerPresentationAnimatorObject {
    _windowWillClose<R = void, P0 = unknown>(__windowWillClose: P0): R;
    _makeWindowWithContentRect<R = unknown, P0 = cocoa.CGRect>(__makeWindowWithContentRect: P0): R;
    window<R = cocoa.NSWindow>(): R;
  }
  namespace classes {
    export interface NSViewControllerWindowTransition<T = any> extends cocoa.classes.NSViewControllerPresentationAnimatorObject {
      alloc<R = NSViewControllerWindowTransition>(): R;
      new: <R = NSViewControllerWindowTransition>() => R;
    }
  }
}

declare const NSViewControllerWindowTransition: cocoa.classes.NSViewControllerWindowTransition;
