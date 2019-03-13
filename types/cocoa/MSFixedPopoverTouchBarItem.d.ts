/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFixedPopoverTouchBarItem<T = any> extends NSPopoverTouchBarItem {
    cxx_destruct<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    setPopoverTouchBar<R = void, P0 = unknown>(_setPopoverTouchBar: P0): R;
    ms_parentTouchBar<R = NSTouchBar>(): R;
    setMs_parentTouchBar<R = void, P0 = NSTouchBar>(_v: P0): R;
  }
  namespace classes {
    export interface MSFixedPopoverTouchBarItem<T = any> extends NSPopoverTouchBarItem {
      alloc<R = MSFixedPopoverTouchBarItem>(): R;
      new: <R = MSFixedPopoverTouchBarItem>() => R;
    }
  }
}

declare const MSFixedPopoverTouchBarItem: cocoa.classes.MSFixedPopoverTouchBarItem;
