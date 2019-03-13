/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitElectricCurrent<T = any> extends NSDimension, NSSecureCodingProtocol {}
  namespace classes {
    export interface NSUnitElectricCurrent<T = any> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitElectricCurrent>(): R;
      new: <R = NSUnitElectricCurrent>() => R;
      microamperes<R = unknown>(): R;
      milliamperes<R = unknown>(): R;
      amperes<R = unknown>(): R;
      kiloamperes<R = unknown>(): R;
      megaamperes<R = unknown>(): R;
    }
  }
}

declare const NSUnitElectricCurrent: cocoa.classes.NSUnitElectricCurrent;
