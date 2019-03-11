/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlatSectionBackgroundSeparatorView<T = any> extends cocoa.MSSectionBackgroundSeparatorView {}
  namespace classes {
    export interface MSFlatSectionBackgroundSeparatorView<T = any> extends cocoa.classes.MSSectionBackgroundSeparatorView {
      alloc<R = MSFlatSectionBackgroundSeparatorView>(): R;
      new: <R = MSFlatSectionBackgroundSeparatorView>() => R;
    }
  }
}

declare const MSFlatSectionBackgroundSeparatorView: cocoa.classes.MSFlatSectionBackgroundSeparatorView;
