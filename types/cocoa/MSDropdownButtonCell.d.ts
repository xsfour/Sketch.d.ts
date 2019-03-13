/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDropdownButtonCell<T = any> extends MSInspectorPushButtonCell {}
  namespace classes {
    export interface MSDropdownButtonCell<T = any> extends MSInspectorPushButtonCell {
      alloc<R = MSDropdownButtonCell>(): R;
      new: <R = MSDropdownButtonCell>() => R;
    }
  }
}

declare const MSDropdownButtonCell: cocoa.classes.MSDropdownButtonCell;
