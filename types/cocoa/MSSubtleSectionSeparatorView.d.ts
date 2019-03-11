/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSubtleSectionSeparatorView<T = any> extends cocoa.MSSectionBackgroundSeparatorView {
    isOpaque<R = boolean>(): R;
  }
  namespace classes {
    export interface MSSubtleSectionSeparatorView<T = any> extends cocoa.classes.MSSectionBackgroundSeparatorView {
      alloc<R = MSSubtleSectionSeparatorView>(): R;
      new: <R = MSSubtleSectionSeparatorView>() => R;
    }
  }
}

declare const MSSubtleSectionSeparatorView: cocoa.classes.MSSubtleSectionSeparatorView;
