/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarProxyItemViewerAccessibilityHelper<T = any> extends _NSToolbarItemViewerAccessibilityHelper {
    showsAccessibilityDescriptionInIconOnlyMode<R = boolean>(): R;
    realElement<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSToolbarProxyItemViewerAccessibilityHelper<T = any> extends _NSToolbarItemViewerAccessibilityHelper {
      alloc<R = _NSToolbarProxyItemViewerAccessibilityHelper>(): R;
      new: <R = _NSToolbarProxyItemViewerAccessibilityHelper>() => R;
    }
  }
}
