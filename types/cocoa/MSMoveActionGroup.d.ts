/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMoveActionGroup<T = any> extends cocoa.MSActionGroup {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSMoveActionGroup<T = any> extends cocoa.classes.MSActionGroup {
      alloc<R = MSMoveActionGroup>(): R;
      new: <R = MSMoveActionGroup>() => R;
    }
  }
}

declare const MSMoveActionGroup: cocoa.classes.MSMoveActionGroup;
