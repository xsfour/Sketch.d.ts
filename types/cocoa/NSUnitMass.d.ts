/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitMass<T = any> extends cocoa.NSDimension, cocoa.NSSecureCodingProtocol {}
  namespace classes {
    export interface NSUnitMass<T = any> extends cocoa.classes.NSDimension, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSUnitMass>(): R;
      new: <R = NSUnitMass>() => R;
      slugs<R = unknown>(): R;
      ouncesTroy<R = unknown>(): R;
      carats<R = unknown>(): R;
      shortTons<R = unknown>(): R;
      metricTons<R = unknown>(): R;
      stones<R = unknown>(): R;
      poundsMass<R = unknown>(): R;
      ounces<R = unknown>(): R;
      picograms<R = unknown>(): R;
      nanograms<R = unknown>(): R;
      micrograms<R = unknown>(): R;
      milligrams<R = unknown>(): R;
      centigrams<R = unknown>(): R;
      decigrams<R = unknown>(): R;
      grams<R = unknown>(): R;
      kilograms<R = unknown>(): R;
    }
  }
}

declare const NSUnitMass: cocoa.classes.NSUnitMass;
