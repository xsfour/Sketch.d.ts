/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableForeignStyle<T = any> extends _MSImmutableForeignStyle {}
  namespace classes {
    export interface MSImmutableForeignStyle<T = any> extends _MSImmutableForeignStyle {
      alloc<R = MSImmutableForeignStyle>(): R;
      new: <R = MSImmutableForeignStyle>() => R;
    }
  }
}

declare const MSImmutableForeignStyle: cocoa.classes.MSImmutableForeignStyle;
