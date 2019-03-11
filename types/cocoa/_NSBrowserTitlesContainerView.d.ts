/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBrowserTitlesContainerView<T = any> extends cocoa.NSView {
    _enclosingBrowserView<R = unknown>(): R;
    accessibilitySizeOfChild<R = unknown, P0 = unknown>(_accessibilitySizeOfChild: P0): R;
    accessibilityPositionOfChild<R = unknown, P0 = unknown>(_accessibilityPositionOfChild: P0): R;
    accessibilityIsChildFocusable<R = boolean, P0 = unknown>(_accessibilityIsChildFocusable: P0): R;
    accessibilityHelpStringForChild<R = unknown, P0 = unknown>(_accessibilityHelpStringForChild: P0): R;
    _accessibilityTitleForColumn<R = unknown, P0 = number>(__accessibilityTitleForColumn: P0): R;
  }
  namespace classes {
    export interface _NSBrowserTitlesContainerView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSBrowserTitlesContainerView>(): R;
      new: <R = _NSBrowserTitlesContainerView>() => R;
    }
  }
}
