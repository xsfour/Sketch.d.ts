/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomActions<T = any> extends MSActionGroup {
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSZoomActions<T = any> extends MSActionGroup {
      alloc<R = MSZoomActions>(): R;
      new: <R = MSZoomActions>() => R;
    }
  }
}

declare const MSZoomActions: cocoa.classes.MSZoomActions;
