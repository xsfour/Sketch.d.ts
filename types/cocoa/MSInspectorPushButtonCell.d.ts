/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorPushButtonCell<T = any> extends NSButtonCell {
    namedButtonColor<R = unknown>(): R;
    buttonHighlightedColor<R = NSColor>(): R;
    buttonOnColor<R = NSColor>(): R;
  }
  namespace classes {
    export interface MSInspectorPushButtonCell<T = any> extends NSButtonCell {
      alloc<R = MSInspectorPushButtonCell>(): R;
      new: <R = MSInspectorPushButtonCell>() => R;
    }
  }
}

declare const MSInspectorPushButtonCell: cocoa.classes.MSInspectorPushButtonCell;
