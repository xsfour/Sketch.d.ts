/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSPolygonShape<T = any> extends MSShapePathLayer {
    numberOfPoints<R = number>(): R;
    setNumberOfPoints<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSPolygonShape<T = any> extends MSShapePathLayer {
      alloc<R = _MSPolygonShape>(): R;
      new: <R = _MSPolygonShape>() => R;
    }
  }
}
