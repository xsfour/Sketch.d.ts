/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRGBColorValueFormatter<T = any> extends cocoa.NSFormatter {
    _currentTransformer<R = unknown>(): R;
    _currentFormatter<R = unknown>(): R;
    initWithEntryMode<R = unknown, P0 = number>(_initWithEntryMode: P0): R;
    dealloc<R = void>(): R;
    entryMode<R = number>(): R;
  }
  namespace classes {
    export interface NSRGBColorValueFormatter<T = any> extends cocoa.classes.NSFormatter {
      alloc<R = NSRGBColorValueFormatter>(): R;
      new: <R = NSRGBColorValueFormatter>() => R;
      formatterForEntryMode<R = unknown, P0 = number>(_formatterForEntryMode: P0): R;
    }
  }
}

declare const NSRGBColorValueFormatter: cocoa.classes.NSRGBColorValueFormatter;
