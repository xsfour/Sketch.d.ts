/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMoveActionGroup<T = any> extends MSActionGroup {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSMoveActionGroup<T = any> extends MSActionGroup {
      alloc<R = MSMoveActionGroup>(): R;
      new: <R = MSMoveActionGroup>() => R;
    }
  }
}

declare const MSMoveActionGroup: cocoa.classes.MSMoveActionGroup;
