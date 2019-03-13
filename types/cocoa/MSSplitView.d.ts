/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSplitView<T = any> extends NSSplitView {
    dividerThickness<R = number>(): R;
  }
  namespace classes {
    export interface MSSplitView<T = any> extends NSSplitView {
      alloc<R = MSSplitView>(): R;
      new: <R = MSSplitView>() => R;
    }
  }
}

declare const MSSplitView: cocoa.classes.MSSplitView;
