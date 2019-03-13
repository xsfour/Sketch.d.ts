/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCursorButton<T = any> extends NSButton {
    cxx_destruct<R = void>(): R;
    cursor<R = NSCursor>(): R;
    setCursor<R = void, P0 = NSCursor>(_v: P0): R;
  }
  namespace classes {
    export interface MSCursorButton<T = any> extends NSButton {
      alloc<R = MSCursorButton>(): R;
      new: <R = MSCursorButton>() => R;
    }
  }
}

declare const MSCursorButton: cocoa.classes.MSCursorButton;
