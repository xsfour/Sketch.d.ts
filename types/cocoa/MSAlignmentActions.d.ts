/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignmentActions<T = any> extends cocoa.MSActionGroup {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSAlignmentActions<T = any> extends cocoa.classes.MSActionGroup {
      alloc<R = MSAlignmentActions>(): R;
      new: <R = MSAlignmentActions>() => R;
    }
  }
}

declare const MSAlignmentActions: cocoa.classes.MSAlignmentActions;
