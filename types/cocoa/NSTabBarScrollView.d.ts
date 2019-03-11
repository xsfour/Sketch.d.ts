/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarScrollView<T = any> extends cocoa.NSScrollView {}
  namespace classes {
    export interface NSTabBarScrollView<T = any> extends cocoa.classes.NSScrollView {
      alloc<R = NSTabBarScrollView>(): R;
      new: <R = NSTabBarScrollView>() => R;
    }
  }
}

declare const NSTabBarScrollView: cocoa.classes.NSTabBarScrollView;
