/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableShapePath<T = any> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    points<R = NSArray>(): R;
    setPoints<R = void, P0 = NSArray>(_v: P0): R;
    pointRadiusBehaviour<R = number>(): R;
    setPointRadiusBehaviour<R = void, P0 = number>(_v: P0): R;
    isClosed<R = boolean>(): R;
    setIsClosed<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableShapePath<T = any> extends MSImmutableModelObject {
      alloc<R = _MSImmutableShapePath>(): R;
      new: <R = _MSImmutableShapePath>() => R;
    }
  }
}
