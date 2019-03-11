/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitFuelEfficiency<T = any> extends cocoa.NSDimension, cocoa.NSSecureCodingProtocol {}
  namespace classes {
    export interface NSUnitFuelEfficiency<T = any> extends cocoa.classes.NSDimension, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSUnitFuelEfficiency>(): R;
      new: <R = NSUnitFuelEfficiency>() => R;
      litersPer100Kilometers<R = unknown>(): R;
      milesPerGallon<R = unknown>(): R;
      milesPerImperialGallon<R = unknown>(): R;
    }
  }
}

declare const NSUnitFuelEfficiency: cocoa.classes.NSUnitFuelEfficiency;
