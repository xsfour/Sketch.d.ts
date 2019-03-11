/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableForeignTextStyle<T = any> extends cocoa._MSImmutableForeignTextStyle {}
  namespace classes {
    export interface MSImmutableForeignTextStyle<T = any> extends cocoa.classes._MSImmutableForeignTextStyle {
      alloc<R = MSImmutableForeignTextStyle>(): R;
      new: <R = MSImmutableForeignTextStyle>() => R;
    }
  }
}

declare const MSImmutableForeignTextStyle: cocoa.classes.MSImmutableForeignTextStyle;
