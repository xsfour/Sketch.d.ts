/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitElectricResistance<T = any> extends cocoa.NSDimension, cocoa.NSSecureCodingProtocol {}
  namespace classes {
    export interface NSUnitElectricResistance<T = any> extends cocoa.classes.NSDimension, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSUnitElectricResistance>(): R;
      new: <R = NSUnitElectricResistance>() => R;
      microohms<R = unknown>(): R;
      milliohms<R = unknown>(): R;
      ohms<R = unknown>(): R;
      kiloohms<R = unknown>(): R;
      megaohms<R = unknown>(): R;
    }
  }
}

declare const NSUnitElectricResistance: cocoa.classes.NSUnitElectricResistance;
