/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitDispersion<T = any> extends NSDimension, NSSecureCodingProtocol {}
  namespace classes {
    export interface NSUnitDispersion<T = any> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitDispersion>(): R;
      new: <R = NSUnitDispersion>() => R;
      partsPerMillion<R = unknown>(): R;
    }
  }
}

declare const NSUnitDispersion: cocoa.classes.NSUnitDispersion;
