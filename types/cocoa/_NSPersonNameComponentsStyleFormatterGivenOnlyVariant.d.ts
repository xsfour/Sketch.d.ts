/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPersonNameComponentsStyleFormatterGivenOnlyVariant<T = any> extends cocoa._NSPersonNameComponentsStyleFormatterShortVariantGeneral {
    abbreviatedKeys<R = unknown>(): R;
    keysOfInterest<R = unknown>(): R;
    shortNameFormat<R = number>(): R;
  }
  namespace classes {
    export interface _NSPersonNameComponentsStyleFormatterGivenOnlyVariant<T = any> extends cocoa.classes._NSPersonNameComponentsStyleFormatterShortVariantGeneral {
      alloc<R = _NSPersonNameComponentsStyleFormatterGivenOnlyVariant>(): R;
      new: <R = _NSPersonNameComponentsStyleFormatterGivenOnlyVariant>() => R;
    }
  }
}
