/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorPushButtonCell<T = any> extends cocoa.NSButtonCell {
    namedButtonColor<R = unknown>(): R;
    buttonHighlightedColor<R = cocoa.NSColor>(): R;
    buttonOnColor<R = cocoa.NSColor>(): R;
  }
  namespace classes {
    export interface MSInspectorPushButtonCell<T = any> extends cocoa.classes.NSButtonCell {
      alloc<R = MSInspectorPushButtonCell>(): R;
      new: <R = MSInspectorPushButtonCell>() => R;
    }
  }
}

declare const MSInspectorPushButtonCell: cocoa.classes.MSInspectorPushButtonCell;
