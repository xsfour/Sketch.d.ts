/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsetSeparatorView<T = any> extends cocoa.NSView {
    separatorInsetBetweenSelfAndView<R = cocoa.NSEdgeInsets, P0 = unknown>(_separatorInsetBetweenSelfAndView: P0): R;
  }
  namespace classes {
    export interface MSInsetSeparatorView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSInsetSeparatorView>(): R;
      new: <R = MSInsetSeparatorView>() => R;
    }
  }
}

declare const MSInsetSeparatorView: cocoa.classes.MSInsetSeparatorView;
