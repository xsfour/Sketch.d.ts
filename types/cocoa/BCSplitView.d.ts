/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCSplitView<T = any> extends cocoa.NSSplitView {
    dividerColor<R = unknown>(): R;
  }
  namespace classes {
    export interface BCSplitView<T = any> extends cocoa.classes.NSSplitView {
      alloc<R = BCSplitView>(): R;
      new: <R = BCSplitView>() => R;
    }
  }
}

declare const BCSplitView: cocoa.classes.BCSplitView;
