/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCTableCellTitleFieldEditor<T = any> extends cocoa.NSTextView {
    textContainerOrigin<R = cocoa.CGPoint>(): R;
  }
  namespace classes {
    export interface BCTableCellTitleFieldEditor<T = any> extends cocoa.classes.NSTextView {
      alloc<R = BCTableCellTitleFieldEditor>(): R;
      new: <R = BCTableCellTitleFieldEditor>() => R;
    }
  }
}

declare const BCTableCellTitleFieldEditor: cocoa.classes.BCTableCellTitleFieldEditor;
