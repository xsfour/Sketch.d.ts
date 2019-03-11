/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableForeignObject<T = any> extends cocoa._MSImmutableForeignObject {}
  namespace classes {
    export interface MSImmutableForeignObject<T = any> extends cocoa.classes._MSImmutableForeignObject {
      alloc<R = MSImmutableForeignObject>(): R;
      new: <R = MSImmutableForeignObject>() => R;
    }
  }
}

declare const MSImmutableForeignObject: cocoa.classes.MSImmutableForeignObject;
