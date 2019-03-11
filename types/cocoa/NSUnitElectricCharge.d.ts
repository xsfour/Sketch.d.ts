/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitElectricCharge<T = any> extends cocoa.NSDimension, cocoa.NSSecureCodingProtocol {}
  namespace classes {
    export interface NSUnitElectricCharge<T = any> extends cocoa.classes.NSDimension, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSUnitElectricCharge>(): R;
      new: <R = NSUnitElectricCharge>() => R;
      microampereHours<R = unknown>(): R;
      milliampereHours<R = unknown>(): R;
      ampereHours<R = unknown>(): R;
      kiloampereHours<R = unknown>(): R;
      megaampereHours<R = unknown>(): R;
      coulombs<R = unknown>(): R;
    }
  }
}

declare const NSUnitElectricCharge: cocoa.classes.NSUnitElectricCharge;
