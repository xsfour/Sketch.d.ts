/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableOvalShape<T = any> extends cocoa.MSImmutableShapePathLayer {}
  namespace classes {
    export interface _MSImmutableOvalShape<T = any> extends cocoa.classes.MSImmutableShapePathLayer {
      alloc<R = _MSImmutableOvalShape>(): R;
      new: <R = _MSImmutableOvalShape>() => R;
    }
  }
}
