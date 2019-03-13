/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorToggleImageButtonCell<T = any> extends MSInspectorButtonCell {}
  namespace classes {
    export interface MSInspectorToggleImageButtonCell<T = any> extends MSInspectorButtonCell {
      alloc<R = MSInspectorToggleImageButtonCell>(): R;
      new: <R = MSInspectorToggleImageButtonCell>() => R;
    }
  }
}

declare const MSInspectorToggleImageButtonCell: cocoa.classes.MSInspectorToggleImageButtonCell;
