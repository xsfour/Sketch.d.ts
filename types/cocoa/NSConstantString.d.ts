/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConstantString<T = any> extends cocoa.NSSimpleCString {
    _isDeallocating<R = boolean>(): R;
    _tryRetain<R = boolean>(): R;
    copy<R = unknown>(): R;
    initWithCharactersNoCopy_length<R = unknown, P0 = number, P1 = number>(_initWithCharactersNoCopy: P0, _length: P1): R;
  }
  namespace classes {
    export interface NSConstantString<T = any> extends cocoa.classes.NSSimpleCString {
      alloc<R = NSConstantString>(): R;
      new: <R = NSConstantString>() => R;
    }
  }
}

declare const NSConstantString: cocoa.classes.NSConstantString;
