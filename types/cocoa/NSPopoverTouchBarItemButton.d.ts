/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPopoverTouchBarItemButton<T = any> extends NSButton {
    classForCoder<R = unknown>(): R;
  }
  namespace classes {
    export interface NSPopoverTouchBarItemButton<T = any> extends NSButton {
      alloc<R = NSPopoverTouchBarItemButton>(): R;
      new: <R = NSPopoverTouchBarItemButton>() => R;
    }
  }
}

declare const NSPopoverTouchBarItemButton: cocoa.classes.NSPopoverTouchBarItemButton;
