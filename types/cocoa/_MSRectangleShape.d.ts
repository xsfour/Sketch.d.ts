/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSRectangleShape<T = any> extends MSShapePathLayer {
    hasConvertedToNewRoundCorners<R = boolean>(): R;
    setHasConvertedToNewRoundCorners<R = void, P0 = boolean>(_v: P0): R;
    fixedRadius<R = number>(): R;
    setFixedRadius<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSRectangleShape<T = any> extends MSShapePathLayer {
      alloc<R = _MSRectangleShape>(): R;
      new: <R = _MSRectangleShape>() => R;
    }
  }
}
