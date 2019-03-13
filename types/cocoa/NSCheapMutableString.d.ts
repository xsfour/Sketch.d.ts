/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCheapMutableString<T = any> extends NSMutableString {
    length<R = number>(): R;
    dealloc<R = void>(): R;
    setContentsNoCopy_length_freeWhenDone_isUnicode<R = void, P0 = void, P1 = number, P2 = boolean, P3 = boolean>(_setContentsNoCopy: P0, _length: P1, _freeWhenDone: P2, _isUnicode: P3): R;
  }
  namespace classes {
    export interface NSCheapMutableString<T = any> extends NSMutableString {
      alloc<R = NSCheapMutableString>(): R;
      new: <R = NSCheapMutableString>() => R;
    }
  }
}

declare const NSCheapMutableString: cocoa.classes.NSCheapMutableString;
