/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDistributeActions<T = any> extends cocoa.MSActionGroup {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSDistributeActions<T = any> extends cocoa.classes.MSActionGroup {
      alloc<R = MSDistributeActions>(): R;
      new: <R = MSDistributeActions>() => R;
    }
  }
}

declare const MSDistributeActions: cocoa.classes.MSDistributeActions;
