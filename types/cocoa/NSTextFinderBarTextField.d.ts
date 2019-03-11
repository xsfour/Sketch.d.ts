/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextFinderBarTextField<T = any> extends cocoa.NSTextField {
    statusString<R = cocoa.NSString>(): R;
    setStatusString<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSTextFinderBarTextField<T = any> extends cocoa.classes.NSTextField {
      alloc<R = NSTextFinderBarTextField>(): R;
      new: <R = NSTextFinderBarTextField>() => R;
    }
  }
}

declare const NSTextFinderBarTextField: cocoa.classes.NSTextFinderBarTextField;
