/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTypeSelectPanel<T = any> extends cocoa.NSPanel {
    setCurrentSearchScreenRect<R = void, P0 = cocoa.CGRect>(_setCurrentSearchScreenRect: P0): R;
    _ensureCurrentSearchTextField<R = void>(): R;
    currentSearch<R = cocoa.NSString>(): R;
    setCurrentSearch<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSTypeSelectPanel<T = any> extends cocoa.classes.NSPanel {
      alloc<R = NSTypeSelectPanel>(): R;
      new: <R = NSTypeSelectPanel>() => R;
    }
  }
}

declare const NSTypeSelectPanel: cocoa.classes.NSTypeSelectPanel;
