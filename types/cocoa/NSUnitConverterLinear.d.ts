/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitConverterLinear<T = any> extends cocoa.NSUnitConverter, cocoa.NSSecureCodingProtocol {
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    description<R = unknown>(): R;
    initWithCoefficient_constant<R = unknown, P0 = number, P1 = number>(_initWithCoefficient: P0, _constant: P1): R;
    initWithCoefficient<R = unknown, P0 = number>(_initWithCoefficient: P0): R;
    constant<R = number>(): R;
    coefficient<R = number>(): R;
  }
  namespace classes {
    export interface NSUnitConverterLinear<T = any> extends cocoa.classes.NSUnitConverter, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSUnitConverterLinear>(): R;
      new: <R = NSUnitConverterLinear>() => R;
    }
  }
}

declare const NSUnitConverterLinear: cocoa.classes.NSUnitConverterLinear;
