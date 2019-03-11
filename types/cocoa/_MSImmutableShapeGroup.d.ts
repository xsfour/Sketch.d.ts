/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableShapeGroup<T = any> extends cocoa.MSImmutableLayerGroup {}
  namespace classes {
    export interface _MSImmutableShapeGroup<T = any> extends cocoa.classes.MSImmutableLayerGroup {
      alloc<R = _MSImmutableShapeGroup>(): R;
      new: <R = _MSImmutableShapeGroup>() => R;
    }
  }
}
