/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPaddedButton<T = any> extends NSButton {
    stringsForLength<R = NSArray>(): R;
    setStringsForLength<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface _NSPaddedButton<T = any> extends NSButton {
      alloc<R = _NSPaddedButton>(): R;
      new: <R = _NSPaddedButton>() => R;
    }
  }
}
