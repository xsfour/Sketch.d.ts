/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPolygonShapeAction<T = any> extends MSBaseShapeAction {
    polygonShape<R = void, P0 = unknown>(_polygonShape: P0): R;
  }
  namespace classes {
    export interface MSPolygonShapeAction<T = any> extends MSBaseShapeAction {
      alloc<R = MSPolygonShapeAction>(): R;
      new: <R = MSPolygonShapeAction>() => R;
    }
  }
}

declare const MSPolygonShapeAction: cocoa.classes.MSPolygonShapeAction;
