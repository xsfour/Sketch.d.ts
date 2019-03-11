/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextViewCompletionWindow<T = any> extends cocoa.NSWindow {
    canBecomeVisibleWithoutLogin<R = boolean>(): R;
  }
  namespace classes {
    export interface NSTextViewCompletionWindow<T = any> extends cocoa.classes.NSWindow {
      alloc<R = NSTextViewCompletionWindow>(): R;
      new: <R = NSTextViewCompletionWindow>() => R;
    }
  }
}

declare const NSTextViewCompletionWindow: cocoa.classes.NSTextViewCompletionWindow;
