/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageCollection<T = any> extends cocoa._MSImageCollection {}
  namespace classes {
    export interface MSImageCollection<T = any> extends cocoa.classes._MSImageCollection {
      alloc<R = MSImageCollection>(): R;
      new: <R = MSImageCollection>() => R;
    }
  }
}

declare const MSImageCollection: cocoa.classes.MSImageCollection;
