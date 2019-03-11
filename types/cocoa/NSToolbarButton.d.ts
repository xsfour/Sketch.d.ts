/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarButton<T = any> extends cocoa.NSButton {
    cachedDrawingImage<R = unknown>(): R;
    invalidateCachedDrawingImage<R = void>(): R;
    refusesFirstResponder<R = boolean>(): R;
    sendAction<R = boolean>(): R;
    setImagePosition<R = void, P0 = number>(_setImagePosition: P0): R;
    _item<R = unknown>(): R;
    initWithItem<R = unknown, P0 = unknown>(_initWithItem: P0): R;
  }
  namespace classes {
    export interface NSToolbarButton<T = any> extends cocoa.classes.NSButton {
      alloc<R = NSToolbarButton>(): R;
      new: <R = NSToolbarButton>() => R;
    }
  }
}

declare const NSToolbarButton: cocoa.classes.NSToolbarButton;
