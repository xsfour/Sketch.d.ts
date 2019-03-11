/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutablePolygonShape<T = any> extends cocoa._MSImmutablePolygonShape {}
  namespace classes {
    export interface MSImmutablePolygonShape<T = any> extends cocoa.classes._MSImmutablePolygonShape {
      alloc<R = MSImmutablePolygonShape>(): R;
      new: <R = MSImmutablePolygonShape>() => R;
    }
  }
}

declare const MSImmutablePolygonShape: cocoa.classes.MSImmutablePolygonShape;
