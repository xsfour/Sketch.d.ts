/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPolygonShape<T = any> extends _MSPolygonShape {
    canFlatten<R = boolean>(): R;
    inspectorSections<R = unknown>(): R;
  }
  namespace classes {
    export interface MSPolygonShape<T = any> extends _MSPolygonShape {
      alloc<R = MSPolygonShape>(): R;
      new: <R = MSPolygonShape>() => R;
    }
  }
}

declare const MSPolygonShape: cocoa.classes.MSPolygonShape;
