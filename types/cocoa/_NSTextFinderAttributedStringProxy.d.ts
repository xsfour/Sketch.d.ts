/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTextFinderAttributedStringProxy<T = any> extends NSAttributedString {
    doubleClickAtIndex<R = _NSRange, P0 = number>(_doubleClickAtIndex: P0): R;
    string<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithString<R = unknown, P0 = unknown>(_initWithString: P0): R;
  }
  namespace classes {
    export interface _NSTextFinderAttributedStringProxy<T = any> extends NSAttributedString {
      alloc<R = _NSTextFinderAttributedStringProxy>(): R;
      new: <R = _NSTextFinderAttributedStringProxy>() => R;
    }
  }
}
