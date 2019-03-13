/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableShapeGroup<T = any> extends MSImmutableLayerGroup {}
  namespace classes {
    export interface _MSImmutableShapeGroup<T = any> extends MSImmutableLayerGroup {
      alloc<R = _MSImmutableShapeGroup>(): R;
      new: <R = _MSImmutableShapeGroup>() => R;
    }
  }
}
