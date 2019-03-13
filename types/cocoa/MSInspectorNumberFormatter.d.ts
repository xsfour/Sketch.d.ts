/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorNumberFormatter<T = any> extends NSNumberFormatter {}
  namespace classes {
    export interface MSInspectorNumberFormatter<T = any> extends NSNumberFormatter {
      alloc<R = MSInspectorNumberFormatter>(): R;
      new: <R = MSInspectorNumberFormatter>() => R;
      standardPercentFormatterWithoutPercentSign<R = unknown>(): R;
      standardPercentFormatter<R = unknown>(): R;
      standardIntegerFormatter<R = unknown>(): R;
      standardFloatFormatter<R = unknown>(): R;
    }
  }
}

declare const MSInspectorNumberFormatter: cocoa.classes.MSInspectorNumberFormatter;
