/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitSpeed<T = any> extends cocoa.NSDimension, cocoa.NSSecureCodingProtocol {}
  namespace classes {
    export interface NSUnitSpeed<T = any> extends cocoa.classes.NSDimension, cocoa.classes.NSSecureCodingProtocol {
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
