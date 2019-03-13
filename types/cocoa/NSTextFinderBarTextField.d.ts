/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextFinderBarTextField<T = any> extends NSTextField {
    statusString<R = NSString>(): R;
    setStatusString<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSTextFinderBarTextField<T = any> extends NSTextField {
      alloc<R = NSTextFinderBarTextField>(): R;
      new: <R = NSTextFinderBarTextField>() => R;
    }
  }
}

declare const NSTextFinderBarTextField: cocoa.classes.NSTextFinderBarTextField;
