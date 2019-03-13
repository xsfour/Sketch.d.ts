/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitAngle<T = any> extends NSDimension, NSSecureCodingProtocol {}
  namespace classes {
    export interface NSUnitAngle<T = any> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitAngle>(): R;
      new: <R = NSUnitAngle>() => R;
      revolutions<R = unknown>(): R;
      gradians<R = unknown>(): R;
      radians<R = unknown>(): R;
      arcSeconds<R = unknown>(): R;
      arcMinutes<R = unknown>(): R;
      degrees<R = unknown>(): R;
    }
  }
}

declare const NSUnitAngle: cocoa.classes.NSUnitAngle;
