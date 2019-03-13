/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPersonNameComponentsStyleFormatterAvatar<T = any> extends _NSPersonNameComponentsStyleFormatterShort {
    shouldFallBack<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSPersonNameComponentsStyleFormatterAvatar<T = any> extends _NSPersonNameComponentsStyleFormatterShort {
      alloc<R = _NSPersonNameComponentsStyleFormatterAvatar>(): R;
      new: <R = _NSPersonNameComponentsStyleFormatterAvatar>() => R;
    }
  }
}
