/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableStringProxyForMutableAttributedString<T = any> extends NSMutableString {
    length<R = number>(): R;
    dealloc<R = void>(): R;
    initWithMutableAttributedString<R = unknown, P0 = unknown>(_initWithMutableAttributedString: P0): R;
  }
  namespace classes {
    export interface NSMutableStringProxyForMutableAttributedString<T = any> extends NSMutableString {
      alloc<R = NSMutableStringProxyForMutableAttributedString>(): R;
      new: <R = NSMutableStringProxyForMutableAttributedString>() => R;
    }
  }
}

declare const NSMutableStringProxyForMutableAttributedString: cocoa.classes.NSMutableStringProxyForMutableAttributedString;
