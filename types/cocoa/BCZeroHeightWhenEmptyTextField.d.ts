/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCZeroHeightWhenEmptyTextField<T = any> extends NSTextField {
    paddingIfNotEmpty<R = number>(): R;
    setPaddingIfNotEmpty<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface BCZeroHeightWhenEmptyTextField<T = any> extends NSTextField {
      alloc<R = BCZeroHeightWhenEmptyTextField>(): R;
      new: <R = BCZeroHeightWhenEmptyTextField>() => R;
    }
  }
}

declare const BCZeroHeightWhenEmptyTextField: cocoa.classes.BCZeroHeightWhenEmptyTextField;
