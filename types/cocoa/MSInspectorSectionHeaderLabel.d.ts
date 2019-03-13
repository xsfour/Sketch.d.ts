/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSectionHeaderLabel<T = any> extends NSTextField {}
  namespace classes {
    export interface MSInspectorSectionHeaderLabel<T = any> extends NSTextField {
      alloc<R = MSInspectorSectionHeaderLabel>(): R;
      new: <R = MSInspectorSectionHeaderLabel>() => R;
    }
  }
}

declare const MSInspectorSectionHeaderLabel: cocoa.classes.MSInspectorSectionHeaderLabel;
