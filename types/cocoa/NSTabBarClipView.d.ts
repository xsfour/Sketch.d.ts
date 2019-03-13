/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarClipView<T = any> extends NSClipView {
    shouldChangeNextScrollFromVerticalToHorizontal<R = boolean>(): R;
    setShouldChangeNextScrollFromVerticalToHorizontal<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSTabBarClipView<T = any> extends NSClipView {
      alloc<R = NSTabBarClipView>(): R;
      new: <R = NSTabBarClipView>() => R;
    }
  }
}

declare const NSTabBarClipView: cocoa.classes.NSTabBarClipView;
