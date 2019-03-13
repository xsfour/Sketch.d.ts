/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPersonNameComponentsStyleFormatterNicknameVariant<T = any> extends _NSPersonNameComponentsStyleFormatter {
    abbreviatedKeys<R = unknown>(): R;
    orderedTemplate<R = unknown>(): R;
    keysOfInterest<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSPersonNameComponentsStyleFormatterNicknameVariant<T = any> extends _NSPersonNameComponentsStyleFormatter {
      alloc<R = _NSPersonNameComponentsStyleFormatterNicknameVariant>(): R;
      new: <R = _NSPersonNameComponentsStyleFormatterNicknameVariant>() => R;
    }
  }
}
