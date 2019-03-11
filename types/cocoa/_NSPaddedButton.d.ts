/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPaddedButton<T = any> extends cocoa.NSButton {
    stringsForLength<R = cocoa.NSArray>(): R;
    setStringsForLength<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface _NSPaddedButton<T = any> extends cocoa.classes.NSButton {
      alloc<R = _NSPaddedButton>(): R;
      new: <R = _NSPaddedButton>() => R;
    }
  }
}
