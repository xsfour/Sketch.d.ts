/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitTemperature<T = any> extends NSDimension, NSSecureCodingProtocol {}
  namespace classes {
    export interface NSUnitTemperature<T = any> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitTemperature>(): R;
      new: <R = NSUnitTemperature>() => R;
      kelvin<R = unknown>(): R;
      fahrenheit<R = unknown>(): R;
      celsius<R = unknown>(): R;
    }
  }
}

declare const NSUnitTemperature: cocoa.classes.NSUnitTemperature;
