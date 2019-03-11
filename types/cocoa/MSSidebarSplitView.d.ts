/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSidebarSplitView<T = any> extends cocoa.NSSplitView {
    setFrame<R = void, P0 = cocoa.CGRect>(_setFrame: P0): R;
    shouldDrawDivider<R = boolean>(): R;
    dividerColor<R = unknown>(): R;
    dividerThickness<R = number>(): R;
  }
  namespace classes {
    export interface MSSidebarSplitView<T = any> extends cocoa.classes.NSSplitView {
      alloc<R = MSSidebarSplitView>(): R;
      new: <R = MSSidebarSplitView>() => R;
    }
  }
}

declare const MSSidebarSplitView: cocoa.classes.MSSidebarSplitView;
