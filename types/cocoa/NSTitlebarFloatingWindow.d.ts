/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTitlebarFloatingWindow<T = any> extends NSWindow {
    isExcludedFromWindowsMenu<R = boolean>(): R;
    canBecomeMainWindow<R = boolean>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    representedURL<R = unknown>(): R;
    representedFilename<R = unknown>(): R;
    setMenuBarRevealedValue<R = void, P0 = number>(_setMenuBarRevealedValue: P0): R;
    originalWindow<R = NSWindow>(): R;
    setOriginalWindow<R = void, P0 = NSWindow>(_v: P0): R;
  }
  namespace classes {
    export interface NSTitlebarFloatingWindow<T = any> extends NSWindow {
      alloc<R = NSTitlebarFloatingWindow>(): R;
      new: <R = NSTitlebarFloatingWindow>() => R;
    }
  }
}

declare const NSTitlebarFloatingWindow: cocoa.classes.NSTitlebarFloatingWindow;
