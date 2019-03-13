/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAdaptableColor<T = any> extends NSColor {}
  namespace classes {
    export interface MSAdaptableColor<T = any> extends NSColor {
      alloc<R = MSAdaptableColor>(): R;
      new: <R = MSAdaptableColor>() => R;
    }
  }
}

declare const MSAdaptableColor: cocoa.classes.MSAdaptableColor;
