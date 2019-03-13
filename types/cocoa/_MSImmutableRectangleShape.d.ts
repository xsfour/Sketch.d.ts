/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableRectangleShape<T = any> extends MSImmutableShapePathLayer {
    hasConvertedToNewRoundCorners<R = boolean>(): R;
    setHasConvertedToNewRoundCorners<R = void, P0 = boolean>(_v: P0): R;
    fixedRadius<R = number>(): R;
    setFixedRadius<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableRectangleShape<T = any> extends MSImmutableShapePathLayer {
      alloc<R = _MSImmutableRectangleShape>(): R;
      new: <R = _MSImmutableRectangleShape>() => R;
    }
  }
}
