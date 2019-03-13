/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitDuration<T = any> extends NSDimension, NSSecureCodingProtocol {}
  namespace classes {
    export interface NSUnitDuration<T = any> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitDuration>(): R;
      new: <R = NSUnitDuration>() => R;
      hours<R = unknown>(): R;
      minutes<R = unknown>(): R;
      seconds<R = unknown>(): R;
    }
  }
}

declare const NSUnitDuration: cocoa.classes.NSUnitDuration;
