/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPersonNameComponentsStyleFormatterShortVariantGeneral<T = any> extends _NSPersonNameComponentsStyleFormatter {
    fallbackStyleFormatter<R = unknown>(): R;
    shortNameFormat<R = number>(): R;
  }
  namespace classes {
    export interface _NSPersonNameComponentsStyleFormatterShortVariantGeneral<T = any> extends _NSPersonNameComponentsStyleFormatter {
      alloc<R = _NSPersonNameComponentsStyleFormatterShortVariantGeneral>(): R;
      new: <R = _NSPersonNameComponentsStyleFormatterShortVariantGeneral>() => R;
    }
  }
}
