/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorToggleButtonCell<T = any> extends MSInspectorButtonCell {}
  namespace classes {
    export interface MSInspectorToggleButtonCell<T = any> extends MSInspectorButtonCell {
      alloc<R = MSInspectorToggleButtonCell>(): R;
      new: <R = MSInspectorToggleButtonCell>() => R;
    }
  }
}

declare const MSInspectorToggleButtonCell: cocoa.classes.MSInspectorToggleButtonCell;
