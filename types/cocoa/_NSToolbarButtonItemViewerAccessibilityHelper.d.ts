/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarButtonItemViewerAccessibilityHelper<T = any> extends cocoa._NSToolbarProxyItemViewerAccessibilityHelper {
    _accessibilityToolbarButtonElement<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSToolbarButtonItemViewerAccessibilityHelper<T = any> extends cocoa.classes._NSToolbarProxyItemViewerAccessibilityHelper {
      alloc<R = _NSToolbarButtonItemViewerAccessibilityHelper>(): R;
      new: <R = _NSToolbarButtonItemViewerAccessibilityHelper>() => R;
    }
  }
}
