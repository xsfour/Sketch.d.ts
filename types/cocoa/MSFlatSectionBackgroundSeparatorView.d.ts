/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlatSectionBackgroundSeparatorView<T = any> extends MSSectionBackgroundSeparatorView {}
  namespace classes {
    export interface MSFlatSectionBackgroundSeparatorView<T = any> extends MSSectionBackgroundSeparatorView {
      alloc<R = MSFlatSectionBackgroundSeparatorView>(): R;
      new: <R = MSFlatSectionBackgroundSeparatorView>() => R;
    }
  }
}

declare const MSFlatSectionBackgroundSeparatorView: cocoa.classes.MSFlatSectionBackgroundSeparatorView;
