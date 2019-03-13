/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPersonNameComponentsStyleFormatterAbbreviated<T = any> extends _NSPersonNameComponentsStyleFormatter {
    fallbackStyleFormatter<R = unknown>(): R;
    shouldIgnoreComponentsContainingSpecialCharacters<R = boolean>(): R;
    keysOfInterest<R = unknown>(): R;
    abbreviatedKeys<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSPersonNameComponentsStyleFormatterAbbreviated<T = any> extends _NSPersonNameComponentsStyleFormatter {
      alloc<R = _NSPersonNameComponentsStyleFormatterAbbreviated>(): R;
      new: <R = _NSPersonNameComponentsStyleFormatterAbbreviated>() => R;
    }
  }
}
