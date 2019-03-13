/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableShapePathLayer<T = any> extends MSImmutableStyledLayer {
    points<R = NSArray>(): R;
    setPoints<R = void, P0 = NSArray>(_v: P0): R;
    pointRadiusBehaviour<R = number>(): R;
    setPointRadiusBehaviour<R = void, P0 = number>(_v: P0): R;
    isClosed<R = boolean>(): R;
    setIsClosed<R = void, P0 = boolean>(_v: P0): R;
    edited<R = boolean>(): R;
    setEdited<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableShapePathLayer<T = any> extends MSImmutableStyledLayer {
      alloc<R = _MSImmutableShapePathLayer>(): R;
      new: <R = _MSImmutableShapePathLayer>() => R;
    }
  }
}
