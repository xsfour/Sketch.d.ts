/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDimension<T = any> extends NSUnit, NSSecureCodingProtocol {
    dimension<R = unknown>(): R;
    initWithSpecifier_symbol_converter<R = unknown, P0 = number, P1 = unknown, P2 = unknown>(_initWithSpecifier: P0, _symbol: P1, _converter: P2): R;
    initWithSymbol_converter<R = unknown, P0 = unknown, P1 = unknown>(_initWithSymbol: P0, _converter: P1): R;
    converter<R = NSUnitConverter>(): R;
    specifier<R = number>(): R;
  }
  namespace classes {
    export interface NSDimension<T = any> extends NSUnit, NSSecureCodingProtocol {
      alloc<R = NSDimension>(): R;
      new: <R = NSDimension>() => R;
      baseUnit<R = unknown>(): R;
      _measurementWithNaturalScale_system<R = unknown, P0 = unknown, P1 = number>(__measurementWithNaturalScale: P0, _system: P1): R;
    }
  }
}

declare const NSDimension: cocoa.classes.NSDimension;
