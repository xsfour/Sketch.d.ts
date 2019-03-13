/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCWindowBadge<T = any> extends NSButton {
    cxx_destruct<R = void>(): R;
    windowDidChangeKeyState<R = void, P0 = unknown>(_windowDidChangeKeyState: P0): R;
    tintColor<R = NSColor>(): R;
    setTintColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface BCWindowBadge<T = any> extends NSButton {
      alloc<R = BCWindowBadge>(): R;
      new: <R = BCWindowBadge>() => R;
    }
  }
}

declare const BCWindowBadge: cocoa.classes.BCWindowBadge;
