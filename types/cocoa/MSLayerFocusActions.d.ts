/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerFocusActions<T = any> extends MSActionGroup {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSLayerFocusActions<T = any> extends MSActionGroup {
      alloc<R = MSLayerFocusActions>(): R;
      new: <R = MSLayerFocusActions>() => R;
    }
  }
}

declare const MSLayerFocusActions: cocoa.classes.MSLayerFocusActions;
