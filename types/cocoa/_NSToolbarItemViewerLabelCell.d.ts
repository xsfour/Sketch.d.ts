/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarItemViewerLabelCell<T = any> extends cocoa.NSCell {}
  namespace classes {
    export interface _NSToolbarItemViewerLabelCell<T = any> extends cocoa.classes.NSCell {
      alloc<R = _NSToolbarItemViewerLabelCell>(): R;
      new: <R = _NSToolbarItemViewerLabelCell>() => R;
    }
  }
}
