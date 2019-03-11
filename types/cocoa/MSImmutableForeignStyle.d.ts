/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableForeignStyle<T = any> extends cocoa._MSImmutableForeignStyle {}
  namespace classes {
    export interface MSImmutableForeignStyle<T = any> extends cocoa.classes._MSImmutableForeignStyle {
      alloc<R = MSImmutableForeignStyle>(): R;
      new: <R = MSImmutableForeignStyle>() => R;
    }
  }
}

declare const MSImmutableForeignStyle: cocoa.classes.MSImmutableForeignStyle;
