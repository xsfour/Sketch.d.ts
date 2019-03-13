/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilterServicesPasteboard<T = any> extends NSPasteboard {
    changeCount<R = number>(): R;
    types<R = unknown>(): R;
    pasteboardItems<R = unknown>(): R;
  }
  namespace classes {
    export interface NSFilterServicesPasteboard<T = any> extends NSPasteboard {
      alloc<R = NSFilterServicesPasteboard>(): R;
      new: <R = NSFilterServicesPasteboard>() => R;
      filterPasteboardWithPasteboard<R = unknown, P0 = unknown>(_filterPasteboardWithPasteboard: P0): R;
      filterPasteboardWithData_ofType<R = unknown, P0 = unknown, P1 = unknown>(_filterPasteboardWithData: P0, _ofType: P1): R;
    }
  }
}

declare const NSFilterServicesPasteboard: cocoa.classes.NSFilterServicesPasteboard;
