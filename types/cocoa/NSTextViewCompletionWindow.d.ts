/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextViewCompletionWindow<T = any> extends NSWindow {
    canBecomeVisibleWithoutLogin<R = boolean>(): R;
  }
  namespace classes {
    export interface NSTextViewCompletionWindow<T = any> extends NSWindow {
      alloc<R = NSTextViewCompletionWindow>(): R;
      new: <R = NSTextViewCompletionWindow>() => R;
    }
  }
}

declare const NSTextViewCompletionWindow: cocoa.classes.NSTextViewCompletionWindow;
