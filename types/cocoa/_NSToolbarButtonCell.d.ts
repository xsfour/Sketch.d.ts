/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarButtonCell<T = any> extends cocoa.NSButtonCell {}
  namespace classes {
    export interface _NSToolbarButtonCell<T = any> extends cocoa.classes.NSButtonCell {
      alloc<R = _NSToolbarButtonCell>(): R;
      new: <R = _NSToolbarButtonCell>() => R;
    }
  }
}
