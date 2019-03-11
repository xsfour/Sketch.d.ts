/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSShapeGroup<T = any> extends cocoa.MSLayerGroup {}
  namespace classes {
    export interface _MSShapeGroup<T = any> extends cocoa.classes.MSLayerGroup {
      alloc<R = _MSShapeGroup>(): R;
      new: <R = _MSShapeGroup>() => R;
    }
  }
}
