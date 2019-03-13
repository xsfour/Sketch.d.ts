/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPersonNameComponentsStyleFormatterLong<T = any> extends _NSPersonNameComponentsStyleFormatter {
    fallbackStyleFormatter<R = unknown>(): R;
    keysOfInterest<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSPersonNameComponentsStyleFormatterLong<T = any> extends _NSPersonNameComponentsStyleFormatter {
      alloc<R = _NSPersonNameComponentsStyleFormatterLong>(): R;
      new: <R = _NSPersonNameComponentsStyleFormatterLong>() => R;
    }
  }
}
