/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSForeignTextStyle<T = any> extends MSForeignStyle {}
  namespace classes {
    export interface _MSForeignTextStyle<T = any> extends MSForeignStyle {
      alloc<R = _MSForeignTextStyle>(): R;
      new: <R = _MSForeignTextStyle>() => R;
    }
  }
}
