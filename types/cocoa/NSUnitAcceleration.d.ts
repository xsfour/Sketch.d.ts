/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitAcceleration<T = any> extends cocoa.NSDimension, cocoa.NSSecureCodingProtocol {}
  namespace classes {
    export interface NSUnitAcceleration<T = any> extends cocoa.classes.NSDimension, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSUnitAcceleration>(): R;
      new: <R = NSUnitAcceleration>() => R;
      metersPerSecondSquared<R = unknown>(): R;
      gravity<R = unknown>(): R;
    }
  }
}

declare const NSUnitAcceleration: cocoa.classes.NSUnitAcceleration;
