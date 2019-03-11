/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitDuration<T = any> extends cocoa.NSDimension, cocoa.NSSecureCodingProtocol {}
  namespace classes {
    export interface NSUnitDuration<T = any> extends cocoa.classes.NSDimension, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSUnitDuration>(): R;
      new: <R = NSUnitDuration>() => R;
      hours<R = unknown>(): R;
      minutes<R = unknown>(): R;
      seconds<R = unknown>(): R;
    }
  }
}

declare const NSUnitDuration: cocoa.classes.NSUnitDuration;
