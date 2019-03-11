/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableOvalShape<T = any> extends cocoa._MSImmutableOvalShape {}
  namespace classes {
    export interface MSImmutableOvalShape<T = any> extends cocoa.classes._MSImmutableOvalShape {
      alloc<R = MSImmutableOvalShape>(): R;
      new: <R = MSImmutableOvalShape>() => R;
    }
  }
}

declare const MSImmutableOvalShape: cocoa.classes.MSImmutableOvalShape;
