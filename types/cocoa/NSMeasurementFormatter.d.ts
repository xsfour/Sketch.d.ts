/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMeasurementFormatter<T = any> extends cocoa.NSFormatter, cocoa.NSSecureCodingProtocol {
    stringFromUnit<R = unknown, P0 = unknown>(_stringFromUnit: P0): R;
    measurementFromString<R = unknown, P0 = unknown>(_measurementFromString: P0): R;
    stringFromMeasurement<R = unknown, P0 = unknown>(_stringFromMeasurement: P0): R;
    dealloc<R = void>(): R;
    numberFormatter<R = cocoa.NSNumberFormatter>(): R;
    setNumberFormatter<R = void, P0 = cocoa.NSNumberFormatter>(_v: P0): R;
    locale<R = cocoa.NSLocale>(): R;
    setLocale<R = void, P0 = cocoa.NSLocale>(_v: P0): R;
    unitStyle<R = number>(): R;
    setUnitStyle<R = void, P0 = number>(_v: P0): R;
    unitOptions<R = number>(): R;
    setUnitOptions<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSMeasurementFormatter<T = any> extends cocoa.classes.NSFormatter, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSMeasurementFormatter>(): R;
      new: <R = NSMeasurementFormatter>() => R;
    }
  }
}

declare const NSMeasurementFormatter: cocoa.classes.NSMeasurementFormatter;
