/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSForeignTextStyle<T = any> extends cocoa.MSForeignStyle {}
  namespace classes {
    export interface _MSForeignTextStyle<T = any> extends cocoa.classes.MSForeignStyle {
      alloc<R = _MSForeignTextStyle>(): R;
      new: <R = _MSForeignTextStyle>() => R;
    }
  }
}
