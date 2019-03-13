/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBrowserHeaderClipView<T = any> extends NSClipView {
    headerView<R = NSView>(): R;
    setHeaderView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace classes {
    export interface _NSBrowserHeaderClipView<T = any> extends NSClipView {
      alloc<R = _NSBrowserHeaderClipView>(): R;
      new: <R = _NSBrowserHeaderClipView>() => R;
    }
  }
}
