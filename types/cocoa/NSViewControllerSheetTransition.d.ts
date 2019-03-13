/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewControllerSheetTransition<T = any> extends NSViewControllerPresentationAnimatorObject {}
  namespace classes {
    export interface NSViewControllerSheetTransition<T = any> extends NSViewControllerPresentationAnimatorObject {
      alloc<R = NSViewControllerSheetTransition>(): R;
      new: <R = NSViewControllerSheetTransition>() => R;
    }
  }
}

declare const NSViewControllerSheetTransition: cocoa.classes.NSViewControllerSheetTransition;
