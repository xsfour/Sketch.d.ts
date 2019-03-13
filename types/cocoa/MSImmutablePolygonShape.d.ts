/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutablePolygonShape<T = any> extends _MSImmutablePolygonShape {}
  namespace classes {
    export interface MSImmutablePolygonShape<T = any> extends _MSImmutablePolygonShape {
      alloc<R = MSImmutablePolygonShape>(): R;
      new: <R = MSImmutablePolygonShape>() => R;
    }
  }
}

declare const MSImmutablePolygonShape: cocoa.classes.MSImmutablePolygonShape;
