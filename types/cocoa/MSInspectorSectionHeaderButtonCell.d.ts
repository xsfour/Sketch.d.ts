/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSectionHeaderButtonCell<T = any> extends MSInspectorToggleButtonCell {}
  namespace classes {
    export interface MSInspectorSectionHeaderButtonCell<T = any> extends MSInspectorToggleButtonCell {
      alloc<R = MSInspectorSectionHeaderButtonCell>(): R;
      new: <R = MSInspectorSectionHeaderButtonCell>() => R;
    }
  }
}

declare const MSInspectorSectionHeaderButtonCell: cocoa.classes.MSInspectorSectionHeaderButtonCell;
