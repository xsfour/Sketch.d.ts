/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitFrequency<T = any> extends cocoa.NSDimension, cocoa.NSSecureCodingProtocol {}
  namespace classes {
    export interface NSUnitFrequency<T = any> extends cocoa.classes.NSDimension, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSUnitFrequency>(): R;
      new: <R = NSUnitFrequency>() => R;
      nanohertz<R = unknown>(): R;
      microhertz<R = unknown>(): R;
      millihertz<R = unknown>(): R;
      hertz<R = unknown>(): R;
      kilohertz<R = unknown>(): R;
      megahertz<R = unknown>(): R;
      gigahertz<R = unknown>(): R;
      terahertz<R = unknown>(): R;
    }
  }
}

declare const NSUnitFrequency: cocoa.classes.NSUnitFrequency;
