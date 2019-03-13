/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSectionHeaderToggleImageButtonCell<T = any> extends MSInspectorToggleImageButtonCell {}
  namespace classes {
    export interface MSInspectorSectionHeaderToggleImageButtonCell<T = any> extends MSInspectorToggleImageButtonCell {
      alloc<R = MSInspectorSectionHeaderToggleImageButtonCell>(): R;
      new: <R = MSInspectorSectionHeaderToggleImageButtonCell>() => R;
    }
  }
}

declare const MSInspectorSectionHeaderToggleImageButtonCell: cocoa.classes.MSInspectorSectionHeaderToggleImageButtonCell;
