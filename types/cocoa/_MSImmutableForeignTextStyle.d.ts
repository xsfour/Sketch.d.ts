/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableForeignTextStyle<T = any> extends MSImmutableForeignStyle {}
  namespace classes {
    export interface _MSImmutableForeignTextStyle<T = any> extends MSImmutableForeignStyle {
      alloc<R = _MSImmutableForeignTextStyle>(): R;
      new: <R = _MSImmutableForeignTextStyle>() => R;
    }
  }
}
