/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitSpeed<T = any> extends NSDimension, NSSecureCodingProtocol {}
  namespace classes {
    export interface NSUnitSpeed<T = any> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitSpeed>(): R;
      new: <R = NSUnitSpeed>() => R;
      knots<R = unknown>(): R;
      milesPerHour<R = unknown>(): R;
      kilometersPerHour<R = unknown>(): R;
      metersPerSecond<R = unknown>(): R;
    }
  }
}

declare const NSUnitSpeed: cocoa.classes.NSUnitSpeed;
