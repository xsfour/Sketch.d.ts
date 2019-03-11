/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableTriangleShape<T = any> extends cocoa.MSImmutableShapePathLayer {
    isEquilateral<R = boolean>(): R;
    setIsEquilateral<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableTriangleShape<T = any> extends cocoa.classes.MSImmutableShapePathLayer {
      alloc<R = _MSImmutableTriangleShape>(): R;
      new: <R = _MSImmutableTriangleShape>() => R;
    }
  }
}
