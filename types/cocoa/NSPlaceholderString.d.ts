/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPlaceholderString<T = any> extends NSString {
    length<R = number>(): R;
    initWithBytes_length_encoding<R = unknown, P0 = void, P1 = number, P2 = number>(_initWithBytes: P0, _length: P1, _encoding: P2): R;
    dealloc<R = void>(): R;
    _tryRetain<R = boolean>(): R;
    _isDeallocating<R = boolean>(): R;
  }
  namespace classes {
    export interface NSPlaceholderString<T = any> extends NSString {
      alloc<R = NSPlaceholderString>(): R;
      new: <R = NSPlaceholderString>() => R;
    }
  }
}

declare const NSPlaceholderString: cocoa.classes.NSPlaceholderString;
