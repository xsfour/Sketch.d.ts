/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSectionHeaderLabel<T = any> extends cocoa.NSTextField {}
  namespace classes {
    export interface MSInspectorSectionHeaderLabel<T = any> extends cocoa.classes.NSTextField {
      alloc<R = MSInspectorSectionHeaderLabel>(): R;
      new: <R = MSInspectorSectionHeaderLabel>() => R;
    }
  }
}

declare const MSInspectorSectionHeaderLabel: cocoa.classes.MSInspectorSectionHeaderLabel;
