/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeClipView<T = any> extends cocoa.NSClipView {
    contentInsets<R = cocoa.NSEdgeInsets>(): R;
  }
  namespace classes {
    export interface MSWelcomeClipView<T = any> extends cocoa.classes.NSClipView {
      alloc<R = MSWelcomeClipView>(): R;
      new: <R = MSWelcomeClipView>() => R;
    }
  }
}

declare const MSWelcomeClipView: cocoa.classes.MSWelcomeClipView;
