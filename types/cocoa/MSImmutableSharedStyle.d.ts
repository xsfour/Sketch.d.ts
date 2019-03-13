/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSharedStyle<T = any> extends _MSImmutableSharedStyle {}
  namespace classes {
    export interface MSImmutableSharedStyle<T = any> extends _MSImmutableSharedStyle {
      alloc<R = MSImmutableSharedStyle>(): R;
      new: <R = MSImmutableSharedStyle>() => R;
    }
  }
}

declare const MSImmutableSharedStyle: cocoa.classes.MSImmutableSharedStyle;
