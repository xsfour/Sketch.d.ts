/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBrowserFlippedClipView<T = any> extends cocoa.NSClipView {}
  namespace classes {
    export interface _NSBrowserFlippedClipView<T = any> extends cocoa.classes.NSClipView {
      alloc<R = _NSBrowserFlippedClipView>(): R;
      new: <R = _NSBrowserFlippedClipView>() => R;
    }
  }
}
