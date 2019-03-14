/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableOvalShape<T0 = void, T1 = void, T2 = void> extends _MSImmutableOvalShape {}
  namespace MSImmutableOvalShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableOvalShape {
      alloc<R = MSImmutableOvalShape>(): R;
      new: <R = MSImmutableOvalShape>() => R;
    }
  }
}

declare const MSImmutableOvalShape: cocoa.MSImmutableOvalShape.CLASS;
