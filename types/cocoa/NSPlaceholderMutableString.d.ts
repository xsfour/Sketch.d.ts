/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPlaceholderMutableString<T = any> extends cocoa.NSMutableString {
    length<R = number>(): R;
    initWithBytes_length_encoding<R = unknown, P0 = void, P1 = number, P2 = number>(_initWithBytes: P0, _length: P1, _encoding: P2): R;
    dealloc<R = void>(): R;
    _tryRetain<R = boolean>(): R;
    _isDeallocating<R = boolean>(): R;
  }
  namespace classes {
    export interface NSPlaceholderMutableString<T = any> extends cocoa.classes.NSMutableString {
      alloc<R = NSPlaceholderMutableString>(): R;
      new: <R = NSPlaceholderMutableString>() => R;
    }
  }
}

declare const NSPlaceholderMutableString: cocoa.classes.NSPlaceholderMutableString;
