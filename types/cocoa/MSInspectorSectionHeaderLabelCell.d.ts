/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSectionHeaderLabelCell<T = any> extends NSTextFieldCell {
    textColor<R = unknown>(): R;
  }
  namespace classes {
    export interface MSInspectorSectionHeaderLabelCell<T = any> extends NSTextFieldCell {
      alloc<R = MSInspectorSectionHeaderLabelCell>(): R;
      new: <R = MSInspectorSectionHeaderLabelCell>() => R;
    }
  }
}

declare const MSInspectorSectionHeaderLabelCell: cocoa.classes.MSInspectorSectionHeaderLabelCell;
