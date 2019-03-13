/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitLength<T = any> extends NSDimension, NSSecureCodingProtocol {}
  namespace classes {
    export interface NSUnitLength<T = any> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitLength>(): R;
      new: <R = NSUnitLength>() => R;
      parsecs<R = unknown>(): R;
      astronomicalUnits<R = unknown>(): R;
      furlongs<R = unknown>(): R;
      fathoms<R = unknown>(): R;
      nauticalMiles<R = unknown>(): R;
      lightyears<R = unknown>(): R;
      scandinavianMiles<R = unknown>(): R;
      miles<R = unknown>(): R;
      yards<R = unknown>(): R;
      feet<R = unknown>(): R;
      inches<R = unknown>(): R;
      picometers<R = unknown>(): R;
      nanometers<R = unknown>(): R;
      micrometers<R = unknown>(): R;
      millimeters<R = unknown>(): R;
      centimeters<R = unknown>(): R;
      decimeters<R = unknown>(): R;
      meters<R = unknown>(): R;
      decameters<R = unknown>(): R;
      hectometers<R = unknown>(): R;
      kilometers<R = unknown>(): R;
      megameters<R = unknown>(): R;
    }
  }
}

declare const NSUnitLength: cocoa.classes.NSUnitLength;
