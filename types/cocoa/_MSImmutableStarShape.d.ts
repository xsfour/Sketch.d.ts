/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableStarShape<T = any> extends cocoa.MSImmutableShapePathLayer {
    radius<R = number>(): R;
    setRadius<R = void, P0 = number>(_v: P0): R;
    numberOfPoints<R = number>(): R;
    setNumberOfPoints<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableStarShape<T = any> extends cocoa.classes.MSImmutableShapePathLayer {
      alloc<R = _MSImmutableStarShape>(): R;
      new: <R = _MSImmutableStarShape>() => R;
    }
  }
}
