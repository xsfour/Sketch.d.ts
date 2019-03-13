/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMathNumberFormatter<T = any> extends NSNumberFormatter {}
  namespace classes {
    export interface MSMathNumberFormatter<T = any> extends NSNumberFormatter {
      alloc<R = MSMathNumberFormatter>(): R;
      new: <R = MSMathNumberFormatter>() => R;
    }
  }
}

declare const MSMathNumberFormatter: cocoa.classes.MSMathNumberFormatter;
