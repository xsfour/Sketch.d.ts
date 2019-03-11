/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewControllerModalWindowTransition<T = any> extends cocoa.NSViewControllerWindowTransition {}
  namespace classes {
    export interface NSViewControllerModalWindowTransition<T = any> extends cocoa.classes.NSViewControllerWindowTransition {
      alloc<R = NSViewControllerModalWindowTransition>(): R;
      new: <R = NSViewControllerModalWindowTransition>() => R;
    }
  }
}

declare const NSViewControllerModalWindowTransition: cocoa.classes.NSViewControllerModalWindowTransition;
