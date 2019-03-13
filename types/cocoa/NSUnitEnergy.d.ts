/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitEnergy<T = any> extends NSDimension, NSSecureCodingProtocol {}
  namespace classes {
    export interface NSUnitEnergy<T = any> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitEnergy>(): R;
      new: <R = NSUnitEnergy>() => R;
      kilowattHours<R = unknown>(): R;
      calories<R = unknown>(): R;
      kilocalories<R = unknown>(): R;
      joules<R = unknown>(): R;
      kilojoules<R = unknown>(): R;
    }
  }
}

declare const NSUnitEnergy: cocoa.classes.NSUnitEnergy;
