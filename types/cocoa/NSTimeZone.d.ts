/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTimeZone<T = any> {
    // + NSTimeZone(NSTimeZone,NSTimeZonePortCoding):
    classForCoder<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
  }
  namespace classes {
    export interface NSTimeZone<T = any> {
      // + NSTimeZone(NSTimeZone,NSTimeZonePortCoding):
      supportsSecureCoding<R = boolean>(): R;
    }
  }
}

declare const NSTimeZone: cocoa.classes.NSTimeZone;
