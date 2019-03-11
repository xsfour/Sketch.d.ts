/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitPower<T = any> extends cocoa.NSDimension, cocoa.NSSecureCodingProtocol {}
  namespace classes {
    export interface NSUnitPower<T = any> extends cocoa.classes.NSDimension, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSUnitPower>(): R;
      new: <R = NSUnitPower>() => R;
      horsepower<R = unknown>(): R;
      femtowatts<R = unknown>(): R;
      picowatts<R = unknown>(): R;
      nanowatts<R = unknown>(): R;
      microwatts<R = unknown>(): R;
      milliwatts<R = unknown>(): R;
      watts<R = unknown>(): R;
      kilowatts<R = unknown>(): R;
      megawatts<R = unknown>(): R;
      gigawatts<R = unknown>(): R;
      terawatts<R = unknown>(): R;
    }
  }
}

declare const NSUnitPower: cocoa.classes.NSUnitPower;
