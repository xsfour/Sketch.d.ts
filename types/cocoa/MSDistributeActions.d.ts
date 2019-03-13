/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDistributeActions<T = any> extends MSActionGroup {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSDistributeActions<T = any> extends MSActionGroup {
      alloc<R = MSDistributeActions>(): R;
      new: <R = MSDistributeActions>() => R;
    }
  }
}

declare const MSDistributeActions: cocoa.classes.MSDistributeActions;
