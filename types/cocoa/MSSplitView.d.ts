/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSplitView<T = any> extends cocoa.NSSplitView {
    dividerThickness<R = number>(): R;
  }
  namespace classes {
    export interface MSSplitView<T = any> extends cocoa.classes.NSSplitView {
      alloc<R = MSSplitView>(): R;
      new: <R = MSSplitView>() => R;
    }
  }
}

declare const MSSplitView: cocoa.classes.MSSplitView;
