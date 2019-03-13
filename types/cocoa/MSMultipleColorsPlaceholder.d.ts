/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMultipleColorsPlaceholder<T = any> extends NSObject {}
  namespace classes {
    export interface MSMultipleColorsPlaceholder<T = any> extends NSObject {
      alloc<R = MSMultipleColorsPlaceholder>(): R;
      new: <R = MSMultipleColorsPlaceholder>() => R;
      placeholderColor<R = unknown>(): R;
    }
  }
}

declare const MSMultipleColorsPlaceholder: cocoa.classes.MSMultipleColorsPlaceholder;
