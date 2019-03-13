/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarButtonViewItemViewerAccessibilityHelper<T = any> extends _NSToolbarProxyItemViewerAccessibilityHelper {
    _accessibilityToolbarButtonElement<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSToolbarButtonViewItemViewerAccessibilityHelper<T = any> extends _NSToolbarProxyItemViewerAccessibilityHelper {
      alloc<R = _NSToolbarButtonViewItemViewerAccessibilityHelper>(): R;
      new: <R = _NSToolbarButtonViewItemViewerAccessibilityHelper>() => R;
    }
  }
}
