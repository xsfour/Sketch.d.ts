/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSStarShape<T = any> extends cocoa.MSShapePathLayer {
    radius<R = number>(): R;
    setRadius<R = void, P0 = number>(_v: P0): R;
    numberOfPoints<R = number>(): R;
    setNumberOfPoints<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSStarShape<T = any> extends cocoa.classes.MSShapePathLayer {
      alloc<R = _MSStarShape>(): R;
      new: <R = _MSStarShape>() => R;
    }
  }
}
