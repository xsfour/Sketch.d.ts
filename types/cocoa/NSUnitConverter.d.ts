/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitConverter<T = any> extends cocoa.NSObject {
    copyWithZone<R = unknown, P0 = cocoa._NSZone>(_copyWithZone: P0): R;
    valueFromBaseUnitValue<R = number, P0 = number>(_valueFromBaseUnitValue: P0): R;
    baseUnitValueFromValue<R = number, P0 = number>(_baseUnitValueFromValue: P0): R;
  }
  namespace classes {
    export interface NSUnitConverter<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSUnitConverter>(): R;
      new: <R = NSUnitConverter>() => R;
    }
  }
}

declare const NSUnitConverter: cocoa.classes.NSUnitConverter;
