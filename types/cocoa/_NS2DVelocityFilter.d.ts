/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NS2DVelocityFilter<T = any> extends cocoa.NSObject {
    resetIfOutOfDate<R = boolean, P0 = number>(_resetIfOutOfDate: P0): R;
    reset<R = void>(): R;
    addDelta_withTimestamp<R = void, P0 = cocoa.CGPoint, P1 = number>(_addDelta: P0, _withTimestamp: P1): R;
    dealloc<R = void>(): R;
    filteredVelocity<R = cocoa.CGPoint>(): R;
    maxAllowedVelocity<R = number>(): R;
    setMaxAllowedVelocity<R = void, P0 = number>(_v: P0): R;
    lastTimestamp<R = number>(): R;
  }
  namespace classes {
    export interface _NS2DVelocityFilter<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NS2DVelocityFilter>(): R;
      new: <R = _NS2DVelocityFilter>() => R;
    }
  }
}
