/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCharacterPickerTouchBarItem<T = any> extends NSPopoverTouchBarItem {
    popoverViewController<R = NSViewController>(): R;
    setPopoverViewController<R = void, P0 = NSViewController>(_v: P0): R;
  }
  namespace classes {
    export interface NSCharacterPickerTouchBarItem<T = any> extends NSPopoverTouchBarItem {
      alloc<R = NSCharacterPickerTouchBarItem>(): R;
      new: <R = NSCharacterPickerTouchBarItem>() => R;
      characterPickerTouchBarItem<R = unknown>(): R;
    }
  }
}

declare const NSCharacterPickerTouchBarItem: cocoa.classes.NSCharacterPickerTouchBarItem;
