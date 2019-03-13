/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorStrutButtonCell<T = any> extends MSInspectorToggleImageButtonCell {}
  namespace classes {
    export interface MSInspectorStrutButtonCell<T = any> extends MSInspectorToggleImageButtonCell {
      alloc<R = MSInspectorStrutButtonCell>(): R;
      new: <R = MSInspectorStrutButtonCell>() => R;
    }
  }
}

declare const MSInspectorStrutButtonCell: cocoa.classes.MSInspectorStrutButtonCell;
