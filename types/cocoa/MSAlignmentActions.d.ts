/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignmentActions<T = any> extends MSActionGroup {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSAlignmentActions<T = any> extends MSActionGroup {
      alloc<R = MSAlignmentActions>(): R;
      new: <R = MSAlignmentActions>() => R;
    }
  }
}

declare const MSAlignmentActions: cocoa.classes.MSAlignmentActions;
