/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSTriangleShape<T = any> extends cocoa.MSShapePathLayer {
    isEquilateral<R = boolean>(): R;
    setIsEquilateral<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _MSTriangleShape<T = any> extends cocoa.classes.MSShapePathLayer {
      alloc<R = _MSTriangleShape>(): R;
      new: <R = _MSTriangleShape>() => R;
    }
  }
}
