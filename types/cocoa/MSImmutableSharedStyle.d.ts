/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSharedStyle<T = any> extends cocoa._MSImmutableSharedStyle {}
  namespace classes {
    export interface MSImmutableSharedStyle<T = any> extends cocoa.classes._MSImmutableSharedStyle {
      alloc<R = MSImmutableSharedStyle>(): R;
      new: <R = MSImmutableSharedStyle>() => R;
    }
  }
}

declare const MSImmutableSharedStyle: cocoa.classes.MSImmutableSharedStyle;
