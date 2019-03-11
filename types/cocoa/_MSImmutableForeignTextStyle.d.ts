/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableForeignTextStyle<T = any> extends cocoa.MSImmutableForeignStyle {}
  namespace classes {
    export interface _MSImmutableForeignTextStyle<T = any> extends cocoa.classes.MSImmutableForeignStyle {
      alloc<R = _MSImmutableForeignTextStyle>(): R;
      new: <R = _MSImmutableForeignTextStyle>() => R;
    }
  }
}
