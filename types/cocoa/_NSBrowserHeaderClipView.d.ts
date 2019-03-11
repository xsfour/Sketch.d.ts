/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBrowserHeaderClipView<T = any> extends cocoa.NSClipView {
    headerView<R = cocoa.NSView>(): R;
    setHeaderView<R = void, P0 = cocoa.NSView>(_v: P0): R;
  }
  namespace classes {
    export interface _NSBrowserHeaderClipView<T = any> extends cocoa.classes.NSClipView {
      alloc<R = _NSBrowserHeaderClipView>(): R;
      new: <R = _NSBrowserHeaderClipView>() => R;
    }
  }
}
