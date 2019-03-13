/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNavNameFieldFormatter<T = any> extends NSFormatter {
    setAutoAddExtensionToNextInput<R = void, P0 = boolean>(_setAutoAddExtensionToNextInput: P0): R;
    initWithPanel<R = unknown, P0 = unknown>(_initWithPanel: P0): R;
  }
  namespace classes {
    export interface NSNavNameFieldFormatter<T = any> extends NSFormatter {
      alloc<R = NSNavNameFieldFormatter>(): R;
      new: <R = NSNavNameFieldFormatter>() => R;
    }
  }
}

declare const NSNavNameFieldFormatter: cocoa.classes.NSNavNameFieldFormatter;
