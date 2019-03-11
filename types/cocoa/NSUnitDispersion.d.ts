/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitDispersion<T = any> extends cocoa.NSDimension, cocoa.NSSecureCodingProtocol {}
  namespace classes {
    export interface NSUnitDispersion<T = any> extends cocoa.classes.NSDimension, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSUnitDispersion>(): R;
      new: <R = NSUnitDispersion>() => R;
      partsPerMillion<R = unknown>(): R;
    }
  }
}

declare const NSUnitDispersion: cocoa.classes.NSUnitDispersion;
