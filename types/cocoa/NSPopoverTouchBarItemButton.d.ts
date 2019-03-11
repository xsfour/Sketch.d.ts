/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPopoverTouchBarItemButton<T = any> extends cocoa.NSButton {
    classForCoder<R = unknown>(): R;
  }
  namespace classes {
    export interface NSPopoverTouchBarItemButton<T = any> extends cocoa.classes.NSButton {
      alloc<R = NSPopoverTouchBarItemButton>(): R;
      new: <R = NSPopoverTouchBarItemButton>() => R;
    }
  }
}

declare const NSPopoverTouchBarItemButton: cocoa.classes.NSPopoverTouchBarItemButton;
