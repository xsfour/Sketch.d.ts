/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextViewCompletionTableView<T = any> extends NSTableView {}
  namespace classes {
    export interface NSTextViewCompletionTableView<T = any> extends NSTableView {
      alloc<R = NSTextViewCompletionTableView>(): R;
      new: <R = NSTextViewCompletionTableView>() => R;
    }
  }
}

declare const NSTextViewCompletionTableView: cocoa.classes.NSTextViewCompletionTableView;
