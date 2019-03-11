/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMassFormatter<T = any> extends cocoa.NSFormatter, cocoa.NSObservableProtocol, cocoa.NSObserverProtocol {
    stringFromValue_unit<R = unknown, P0 = number, P1 = number>(_stringFromValue: P0, _unit: P1): R;
    stringFromKilograms<R = unknown, P0 = number>(_stringFromKilograms: P0): R;
    unitStringFromValue_unit<R = unknown, P0 = number, P1 = number>(_unitStringFromValue: P0, _unit: P1): R;
    unitStringFromKilograms_usedUnit<R = unknown, P0 = number, P1 = number>(_unitStringFromKilograms: P0, _usedUnit: P1): R;
    dealloc<R = void>(): R;
    targetUnitFromKilograms<R = number, P0 = number>(_targetUnitFromKilograms: P0): R;
    forPersonMassUse<R = boolean>(): R;
    setForPersonMassUse<R = void, P0 = boolean>(_v: P0): R;
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
    export interface NSMassFormatter<T = any> extends cocoa.classes.NSFormatter, cocoa.classes.NSObservableProtocol, cocoa.classes.NSObserverProtocol {
      alloc<R = NSMassFormatter>(): R;
      new: <R = NSMassFormatter>() => R;
    }
  }
}

declare const NSMassFormatter: cocoa.classes.NSMassFormatter;
