/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitConcentrationMass<T = any> extends NSDimension, NSSecureCodingProtocol {}
  namespace classes {
    export interface NSUnitConcentrationMass<T = any> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitConcentrationMass>(): R;
      new: <R = NSUnitConcentrationMass>() => R;
      millimolesPerLiterWithGramsPerMole<R = unknown, P0 = number>(_millimolesPerLiterWithGramsPerMole: P0): R;
      milligramsPerDeciliter<R = unknown>(): R;
      gramsPerLiter<R = unknown>(): R;
    }
  }
}

declare const NSUnitConcentrationMass: cocoa.classes.NSUnitConcentrationMass;
