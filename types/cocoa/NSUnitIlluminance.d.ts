/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitIlluminance<T = any> extends NSDimension, NSSecureCodingProtocol {}
  namespace classes {
    export interface NSUnitIlluminance<T = any> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitIlluminance>(): R;
      new: <R = NSUnitIlluminance>() => R;
      lux<R = unknown>(): R;
    }
  }
}

declare const NSUnitIlluminance: cocoa.classes.NSUnitIlluminance;
