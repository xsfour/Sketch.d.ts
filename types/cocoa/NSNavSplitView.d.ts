/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNavSplitView<T = any> extends cocoa.NSSplitView {}
  namespace classes {
    export interface NSNavSplitView<T = any> extends cocoa.classes.NSSplitView {
      alloc<R = NSNavSplitView>(): R;
      new: <R = NSNavSplitView>() => R;
    }
  }
}

declare const NSNavSplitView: cocoa.classes.NSNavSplitView;
