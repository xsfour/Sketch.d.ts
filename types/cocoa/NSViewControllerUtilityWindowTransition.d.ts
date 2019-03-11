/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewControllerUtilityWindowTransition<T = any> extends cocoa.NSViewControllerWindowTransition {}
  namespace classes {
    export interface NSViewControllerUtilityWindowTransition<T = any> extends cocoa.classes.NSViewControllerWindowTransition {
      alloc<R = NSViewControllerUtilityWindowTransition>(): R;
      new: <R = NSViewControllerUtilityWindowTransition>() => R;
    }
  }
}

declare const NSViewControllerUtilityWindowTransition: cocoa.classes.NSViewControllerUtilityWindowTransition;
