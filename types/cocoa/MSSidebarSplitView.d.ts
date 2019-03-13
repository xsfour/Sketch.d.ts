/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSidebarSplitView<T = any> extends NSSplitView {
    setFrame<R = void, P0 = CGRect>(_setFrame: P0): R;
    shouldDrawDivider<R = boolean>(): R;
    dividerColor<R = unknown>(): R;
    dividerThickness<R = number>(): R;
  }
  namespace classes {
    export interface MSSidebarSplitView<T = any> extends NSSplitView {
      alloc<R = MSSidebarSplitView>(): R;
      new: <R = MSSidebarSplitView>() => R;
    }
  }
}

declare const MSSidebarSplitView: cocoa.classes.MSSidebarSplitView;
