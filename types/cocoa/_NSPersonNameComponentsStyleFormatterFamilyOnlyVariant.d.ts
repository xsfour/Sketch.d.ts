/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPersonNameComponentsStyleFormatterFamilyOnlyVariant<T = any> extends cocoa._NSPersonNameComponentsStyleFormatterShortVariantGeneral {
    abbreviatedKeys<R = unknown>(): R;
    keysOfInterest<R = unknown>(): R;
    shortNameFormat<R = number>(): R;
  }
  namespace classes {
    export interface _NSPersonNameComponentsStyleFormatterFamilyOnlyVariant<T = any> extends cocoa.classes._NSPersonNameComponentsStyleFormatterShortVariantGeneral {
      alloc<R = _NSPersonNameComponentsStyleFormatterFamilyOnlyVariant>(): R;
      new: <R = _NSPersonNameComponentsStyleFormatterFamilyOnlyVariant>() => R;
    }
  }
}
