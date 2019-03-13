/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewControllerWindowTransition<T = any> extends NSViewControllerPresentationAnimatorObject {
    _windowWillClose<R = void, P0 = unknown>(__windowWillClose: P0): R;
    _makeWindowWithContentRect<R = unknown, P0 = CGRect>(__makeWindowWithContentRect: P0): R;
    window<R = NSWindow>(): R;
  }
  namespace classes {
    export interface NSViewControllerWindowTransition<T = any> extends NSViewControllerPresentationAnimatorObject {
      alloc<R = NSViewControllerWindowTransition>(): R;
      new: <R = NSViewControllerWindowTransition>() => R;
    }
  }
}

declare const NSViewControllerWindowTransition: cocoa.classes.NSViewControllerWindowTransition;
