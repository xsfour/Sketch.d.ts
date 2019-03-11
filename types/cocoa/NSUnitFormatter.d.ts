/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitFormatter<T = any> extends cocoa.NSFormatter, cocoa.NSSecureCodingProtocol {
    stringFromUnit<R = unknown, P0 = unknown>(_stringFromUnit: P0): R;
    unitStringFromValue_unit<R = unknown, P0 = number, P1 = number>(_unitStringFromValue: P0, _unit: P1): R;
    stringForValue1_unit1_value2_unit2<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_stringForValue1: P0, _unit1: P1, _value2: P2, _unit2: P3): R;
    stringForValue_unit<R = unknown, P0 = number, P1 = number>(_stringForValue: P0, _unit: P1): R;
    checkIfModified<R = void>(): R;
    _determineUnitsToFormat_fromMeasurement<R = number, P0 = number, P1 = unknown>(__determineUnitsToFormat: P0, _fromMeasurement: P1): R;
    dealloc<R = void>(): R;
    locale<R = cocoa.NSLocale>(): R;
    setLocale<R = void, P0 = cocoa.NSLocale>(_v: P0): R;
    unitStyle<R = number>(): R;
    setUnitStyle<R = void, P0 = number>(_v: P0): R;
    unitOptions<R = number>(): R;
    setUnitOptions<R = void, P0 = number>(_v: P0): R;
    numberFormatter<R = cocoa.NSNumberFormatter>(): R;
    setNumberFormatter<R = void, P0 = cocoa.NSNumberFormatter>(_v: P0): R;
  }
  namespace classes {
    export interface NSUnitFormatter<T = any> extends cocoa.classes.NSFormatter, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSUnitFormatter>(): R;
      new: <R = NSUnitFormatter>() => R;
    }
  }
}

declare const NSUnitFormatter: cocoa.classes.NSUnitFormatter;
