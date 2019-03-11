/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorToggleImageButtonCell<T = any> extends cocoa.MSInspectorButtonCell {}
  namespace classes {
    export interface MSInspectorToggleImageButtonCell<T = any> extends cocoa.classes.MSInspectorButtonCell {
      alloc<R = MSInspectorToggleImageButtonCell>(): R;
      new: <R = MSInspectorToggleImageButtonCell>() => R;
    }
  }
}

declare const MSInspectorToggleImageButtonCell: cocoa.classes.MSInspectorToggleImageButtonCell;
