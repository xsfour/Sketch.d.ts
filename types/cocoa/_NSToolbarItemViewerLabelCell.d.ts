/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarItemViewerLabelCell<T = any> extends NSCell {}
  namespace classes {
    export interface _NSToolbarItemViewerLabelCell<T = any> extends NSCell {
      alloc<R = _NSToolbarItemViewerLabelCell>(): R;
      new: <R = _NSToolbarItemViewerLabelCell>() => R;
    }
  }
}
