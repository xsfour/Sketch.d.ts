/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBrowserScrollView<T = any> extends NSScrollView {
    setAutomaticallyAdjustsContentInsets<R = void, P0 = boolean>(_setAutomaticallyAdjustsContentInsets: P0): R;
    _enclosingBrowserView<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSBrowserScrollView<T = any> extends NSScrollView {
      alloc<R = _NSBrowserScrollView>(): R;
      new: <R = _NSBrowserScrollView>() => R;
    }
  }
}
