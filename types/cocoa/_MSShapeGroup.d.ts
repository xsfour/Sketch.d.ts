/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSShapeGroup<T = any> extends MSLayerGroup {}
  namespace classes {
    export interface _MSShapeGroup<T = any> extends MSLayerGroup {
      alloc<R = _MSShapeGroup>(): R;
      new: <R = _MSShapeGroup>() => R;
    }
  }
}
