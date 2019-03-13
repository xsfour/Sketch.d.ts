/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAutoCappingNumberFormatter<T = any> extends MSMathNumberFormatter {
    uncappedFormatter<R = unknown>(): R;
    cappedValueForString_errorDescription<R = unknown, P0 = unknown, P1 = unknown>(_cappedValueForString: P0, _errorDescription: P1): R;
  }
  namespace classes {
    export interface MSAutoCappingNumberFormatter<T = any> extends MSMathNumberFormatter {
      alloc<R = MSAutoCappingNumberFormatter>(): R;
      new: <R = MSAutoCappingNumberFormatter>() => R;
    }
  }
}

declare const MSAutoCappingNumberFormatter: cocoa.classes.MSAutoCappingNumberFormatter;
