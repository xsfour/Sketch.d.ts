/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitElectricPotentialDifference<T = any> extends NSDimension, NSSecureCodingProtocol {}
  namespace classes {
    export interface NSUnitElectricPotentialDifference<T = any> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitElectricPotentialDifference>(): R;
      new: <R = NSUnitElectricPotentialDifference>() => R;
      microvolts<R = unknown>(): R;
      millivolts<R = unknown>(): R;
      volts<R = unknown>(): R;
      kilovolts<R = unknown>(): R;
      megavolts<R = unknown>(): R;
    }
  }
}

declare const NSUnitElectricPotentialDifference: cocoa.classes.NSUnitElectricPotentialDifference;
