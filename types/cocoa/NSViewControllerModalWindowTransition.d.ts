/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewControllerModalWindowTransition<T = any> extends NSViewControllerWindowTransition {}
  namespace classes {
    export interface NSViewControllerModalWindowTransition<T = any> extends NSViewControllerWindowTransition {
      alloc<R = NSViewControllerModalWindowTransition>(): R;
      new: <R = NSViewControllerModalWindowTransition>() => R;
    }
  }
}

declare const NSViewControllerModalWindowTransition: cocoa.classes.NSViewControllerModalWindowTransition;
