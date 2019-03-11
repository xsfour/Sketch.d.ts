/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerFocusActions<T = any> extends cocoa.MSActionGroup {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSLayerFocusActions<T = any> extends cocoa.classes.MSActionGroup {
      alloc<R = MSLayerFocusActions>(): R;
      new: <R = MSLayerFocusActions>() => R;
    }
  }
}

declare const MSLayerFocusActions: cocoa.classes.MSLayerFocusActions;
