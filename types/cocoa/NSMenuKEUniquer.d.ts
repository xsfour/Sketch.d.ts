/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMenuKEUniquer<T = any> extends cocoa.NSObject {
    items<R = unknown>(): R;
    removeAllItems<R = void>(): R;
    removeItems<R = void, P0 = unknown>(_removeItems: P0): R;
    removeItem<R = void, P0 = unknown>(_removeItem: P0): R;
    addItems<R = void, P0 = unknown>(_addItems: P0): R;
    addItem<R = void, P0 = unknown>(_addItem: P0): R;
    _coreRemoveItem<R = void, P0 = unknown>(__coreRemoveItem: P0): R;
    _coreAddItem<R = void, P0 = unknown>(__coreAddItem: P0): R;
    _printContents<R = void>(): R;
    _debugContents<R = unknown>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSMenuKEUniquer<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSMenuKEUniquer>(): R;
      new: <R = NSMenuKEUniquer>() => R;
      mainMenuUniquer<R = unknown>(): R;
    }
  }
}

declare const NSMenuKEUniquer: cocoa.classes.NSMenuKEUniquer;
