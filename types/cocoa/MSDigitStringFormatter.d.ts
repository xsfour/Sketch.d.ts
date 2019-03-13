/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDigitStringFormatter<T = any> extends NSFormatter {}
  namespace classes {
    export interface MSDigitStringFormatter<T = any> extends NSFormatter {
      alloc<R = MSDigitStringFormatter>(): R;
      new: <R = MSDigitStringFormatter>() => R;
      isDigitString<R = boolean, P0 = unknown>(_isDigitString: P0): R;
    }
  }
}

declare const MSDigitStringFormatter: cocoa.classes.MSDigitStringFormatter;
