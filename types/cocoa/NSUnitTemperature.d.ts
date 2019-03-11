/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitTemperature<T = any> extends cocoa.NSDimension, cocoa.NSSecureCodingProtocol {}
  namespace classes {
    export interface NSUnitTemperature<T = any> extends cocoa.classes.NSDimension, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSUnitTemperature>(): R;
      new: <R = NSUnitTemperature>() => R;
      kelvin<R = unknown>(): R;
      fahrenheit<R = unknown>(): R;
      celsius<R = unknown>(): R;
    }
  }
}

declare const NSUnitTemperature: cocoa.classes.NSUnitTemperature;
