/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLengthFormatter<T = any> extends cocoa.NSFormatter, cocoa.NSObservableProtocol, cocoa.NSObserverProtocol {
    stringFromValue_unit<R = unknown, P0 = number, P1 = number>(_stringFromValue: P0, _unit: P1): R;
    stringFromMeters<R = unknown, P0 = number>(_stringFromMeters: P0): R;
    unitStringFromMeters_usedUnit<R = unknown, P0 = number, P1 = number>(_unitStringFromMeters: P0, _usedUnit: P1): R;
    unitStringFromValue_unit<R = unknown, P0 = number, P1 = number>(_unitStringFromValue: P0, _unit: P1): R;
    dealloc<R = void>(): R;
    targetUnitFromMeters<R = number, P0 = number>(_targetUnitFromMeters: P0): R;
    forPersonHeightUse<R = boolean>(): R;
    setForPersonHeightUse<R = void, P0 = boolean>(_v: P0): R;
    unitStyle<R = number>(): R;
    setUnitStyle<R = void, P0 = number>(_v: P0): R;
    numberFormatter<R = cocoa.NSNumberFormatter>(): R;
    setNumberFormatter<R = void, P0 = cocoa.NSNumberFormatter>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSLengthFormatter<T = any> extends cocoa.classes.NSFormatter, cocoa.classes.NSObservableProtocol, cocoa.classes.NSObserverProtocol {
      alloc<R = NSLengthFormatter>(): R;
      new: <R = NSLengthFormatter>() => R;
    }
  }
}

declare const NSLengthFormatter: cocoa.classes.NSLengthFormatter;
