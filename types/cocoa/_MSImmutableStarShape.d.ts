/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableStarShape<T = any> extends MSImmutableShapePathLayer {
    radius<R = number>(): R;
    setRadius<R = void, P0 = number>(_v: P0): R;
    numberOfPoints<R = number>(): R;
    setNumberOfPoints<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableStarShape<T = any> extends MSImmutableShapePathLayer {
      alloc<R = _MSImmutableStarShape>(): R;
      new: <R = _MSImmutableStarShape>() => R;
    }
  }
}
