/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageCollection<T = any> extends _MSImageCollection {}
  namespace classes {
    export interface MSImageCollection<T = any> extends _MSImageCollection {
      alloc<R = MSImageCollection>(): R;
      new: <R = MSImageCollection>() => R;
    }
  }
}

declare const MSImageCollection: cocoa.classes.MSImageCollection;
