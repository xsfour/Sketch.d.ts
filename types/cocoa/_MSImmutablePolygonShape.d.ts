/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutablePolygonShape<T = any> extends MSImmutableShapePathLayer {
    numberOfPoints<R = number>(): R;
    setNumberOfPoints<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutablePolygonShape<T = any> extends MSImmutableShapePathLayer {
      alloc<R = _MSImmutablePolygonShape>(): R;
      new: <R = _MSImmutablePolygonShape>() => R;
    }
  }
}
