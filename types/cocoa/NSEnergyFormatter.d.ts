/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEnergyFormatter<T = any> extends cocoa.NSFormatter, cocoa.NSObservableProtocol, cocoa.NSObserverProtocol {
    stringFromJoules<R = unknown, P0 = number>(_stringFromJoules: P0): R;
    stringFromValue_unit<R = unknown, P0 = number, P1 = number>(_stringFromValue: P0, _unit: P1): R;
    unitStringFromJoules_usedUnit<R = unknown, P0 = number, P1 = number>(_unitStringFromJoules: P0, _usedUnit: P1): R;
    unitStringFromValue_unit<R = unknown, P0 = number, P1 = number>(_unitStringFromValue: P0, _unit: P1): R;
    dealloc<R = void>(): R;
    targetUnitFromJoules<R = number, P0 = number>(_targetUnitFromJoules: P0): R;
    forFoodEnergyUse<R = boolean>(): R;
    setForFoodEnergyUse<R = void, P0 = boolean>(_v: P0): R;
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
    export interface NSEnergyFormatter<T = any> extends cocoa.classes.NSFormatter, cocoa.classes.NSObservableProtocol, cocoa.classes.NSObserverProtocol {
      alloc<R = NSEnergyFormatter>(): R;
      new: <R = NSEnergyFormatter>() => R;
    }
  }
}

declare const NSEnergyFormatter: cocoa.classes.NSEnergyFormatter;
