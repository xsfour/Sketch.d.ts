/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSOvalShape<T = any> extends MSShapePathLayer {}
  namespace classes {
    export interface _MSOvalShape<T = any> extends MSShapePathLayer {
      alloc<R = _MSOvalShape>(): R;
      new: <R = _MSOvalShape>() => R;
    }
  }
}
