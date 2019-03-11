/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPersonNameComponentsStyleFormatterFamilyInitialVariant<T = any> extends cocoa._NSPersonNameComponentsStyleFormatterShortVariantGeneral {
    abbreviatedKeys<R = unknown>(): R;
    keysOfInterest<R = unknown>(): R;
    shortNameFormat<R = number>(): R;
  }
  namespace classes {
    export interface _NSPersonNameComponentsStyleFormatterFamilyInitialVariant<T = any> extends cocoa.classes._NSPersonNameComponentsStyleFormatterShortVariantGeneral {
      alloc<R = _NSPersonNameComponentsStyleFormatterFamilyInitialVariant>(): R;
      new: <R = _NSPersonNameComponentsStyleFormatterFamilyInitialVariant>() => R;
    }
  }
}
