/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitConverterReciprocal<T = any> extends cocoa.NSUnitConverter, cocoa.NSSecureCodingProtocol {
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    description<R = unknown>(): R;
    initWithReciprocalValue<R = unknown, P0 = number>(_initWithReciprocalValue: P0): R;
    reciprocalValue<R = number>(): R;
  }
  namespace classes {
    export interface NSUnitConverterReciprocal<T = any> extends cocoa.classes.NSUnitConverter, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSUnitConverterReciprocal>(): R;
      new: <R = NSUnitConverterReciprocal>() => R;
    }
  }
}

declare const NSUnitConverterReciprocal: cocoa.classes.NSUnitConverterReciprocal;
