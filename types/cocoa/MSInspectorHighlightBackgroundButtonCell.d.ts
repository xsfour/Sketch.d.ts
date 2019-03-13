/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorHighlightBackgroundButtonCell<T = any> extends MSInspectorButtonCell {}
  namespace classes {
    export interface MSInspectorHighlightBackgroundButtonCell<T = any> extends MSInspectorButtonCell {
      alloc<R = MSInspectorHighlightBackgroundButtonCell>(): R;
      new: <R = MSInspectorHighlightBackgroundButtonCell>() => R;
    }
  }
}

declare const MSInspectorHighlightBackgroundButtonCell: cocoa.classes.MSInspectorHighlightBackgroundButtonCell;
