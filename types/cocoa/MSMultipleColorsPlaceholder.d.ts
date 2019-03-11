/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMultipleColorsPlaceholder<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface MSMultipleColorsPlaceholder<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSMultipleColorsPlaceholder>(): R;
      new: <R = MSMultipleColorsPlaceholder>() => R;
      placeholderColor<R = unknown>(): R;
    }
  }
}

declare const MSMultipleColorsPlaceholder: cocoa.classes.MSMultipleColorsPlaceholder;
