/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRGBColorValueTransformer<T = any> extends NSValueTransformer {
    entryMode<R = number>(): R;
    setEntryMode<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSRGBColorValueTransformer<T = any> extends NSValueTransformer {
      alloc<R = NSRGBColorValueTransformer>(): R;
      new: <R = NSRGBColorValueTransformer>() => R;
    }
  }
}

declare const NSRGBColorValueTransformer: cocoa.classes.NSRGBColorValueTransformer;
