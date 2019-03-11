/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLazyBrowserCell<T = any> extends cocoa.NSBrowserCell {
    setControlView<R = void, P0 = unknown>(_setControlView: P0): R;
    isLoaded<R = boolean>(): R;
    setLoaded<R = void, P0 = boolean>(_setLoaded: P0): R;
  }
  namespace classes {
    export interface NSLazyBrowserCell<T = any> extends cocoa.classes.NSBrowserCell {
      alloc<R = NSLazyBrowserCell>(): R;
      new: <R = NSLazyBrowserCell>() => R;
      lazyBrowserCell<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSLazyBrowserCell: cocoa.classes.NSLazyBrowserCell;
