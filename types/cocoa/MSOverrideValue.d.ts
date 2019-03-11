/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverrideValue<T = any> extends cocoa._MSOverrideValue {
    hash<R = number>(): R;
    addPredecessor<R = void, P0 = unknown>(_addPredecessor: P0): R;
    description<R = unknown>(): R;
    initWithName_value<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _value: P1): R;
    predecessor<R = cocoa.MSOverrideValue>(): R;
    setPredecessor<R = void, P0 = cocoa.MSOverrideValue>(_v: P0): R;
    isInherited<R = boolean>(): R;
    setIsInherited<R = void, P0 = boolean>(_v: P0): R;
    attributeName<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface MSOverrideValue<T = any> extends cocoa.classes._MSOverrideValue {
      alloc<R = MSOverrideValue>(): R;
      new: <R = MSOverrideValue>() => R;
    }
  }
}

declare const MSOverrideValue: cocoa.classes.MSOverrideValue;
