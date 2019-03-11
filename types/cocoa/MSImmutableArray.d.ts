/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableArray<T = any> extends cocoa.MSImmutableModelObject {}
  namespace classes {
    export interface MSImmutableArray<T = any> extends cocoa.classes.MSImmutableModelObject {
      alloc<R = MSImmutableArray>(): R;
      new: <R = MSImmutableArray>() => R;
    }
  }
}

declare const MSImmutableArray: cocoa.classes.MSImmutableArray;
