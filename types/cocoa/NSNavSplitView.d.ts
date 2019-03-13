/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNavSplitView<T = any> extends NSSplitView {}
  namespace classes {
    export interface NSNavSplitView<T = any> extends NSSplitView {
      alloc<R = NSNavSplitView>(): R;
      new: <R = NSNavSplitView>() => R;
    }
  }
}

declare const NSNavSplitView: cocoa.classes.NSNavSplitView;
