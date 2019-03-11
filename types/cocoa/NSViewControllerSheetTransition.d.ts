/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewControllerSheetTransition<T = any> extends cocoa.NSViewControllerPresentationAnimatorObject {}
  namespace classes {
    export interface NSViewControllerSheetTransition<T = any> extends cocoa.classes.NSViewControllerPresentationAnimatorObject {
      alloc<R = NSViewControllerSheetTransition>(): R;
      new: <R = NSViewControllerSheetTransition>() => R;
    }
  }
}

declare const NSViewControllerSheetTransition: cocoa.classes.NSViewControllerSheetTransition;
