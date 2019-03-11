/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPersonNameComponentsStyleFormatterMedium<T = any> extends cocoa._NSPersonNameComponentsStyleFormatter {
    keysOfInterest<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSPersonNameComponentsStyleFormatterMedium<T = any> extends cocoa.classes._NSPersonNameComponentsStyleFormatter {
      alloc<R = _NSPersonNameComponentsStyleFormatterMedium>(): R;
      new: <R = _NSPersonNameComponentsStyleFormatterMedium>() => R;
    }
  }
}
