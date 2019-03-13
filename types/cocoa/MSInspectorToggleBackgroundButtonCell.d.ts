/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorToggleBackgroundButtonCell<T = any> extends MSInspectorButtonCell {}
  namespace classes {
    export interface MSInspectorToggleBackgroundButtonCell<T = any> extends MSInspectorButtonCell {
      alloc<R = MSInspectorToggleBackgroundButtonCell>(): R;
      new: <R = MSInspectorToggleBackgroundButtonCell>() => R;
    }
  }
}

declare const MSInspectorToggleBackgroundButtonCell: cocoa.classes.MSInspectorToggleBackgroundButtonCell;
