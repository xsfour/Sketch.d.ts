/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitPressure<T = any> extends NSDimension, NSSecureCodingProtocol {}
  namespace classes {
    export interface NSUnitPressure<T = any> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitPressure>(): R;
      new: <R = NSUnitPressure>() => R;
      poundsForcePerSquareInch<R = unknown>(): R;
      millimetersOfMercury<R = unknown>(): R;
      millibars<R = unknown>(): R;
      bars<R = unknown>(): R;
      inchesOfMercury<R = unknown>(): R;
      hectopascals<R = unknown>(): R;
      kilopascals<R = unknown>(): R;
      megapascals<R = unknown>(): R;
      gigapascals<R = unknown>(): R;
      newtonsPerMetersSquared<R = unknown>(): R;
    }
  }
}

declare const NSUnitPressure: cocoa.classes.NSUnitPressure;
