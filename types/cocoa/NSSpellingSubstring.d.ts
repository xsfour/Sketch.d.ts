/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSpellingSubstring<T = any> extends cocoa.NSString {
    length<R = number>(): R;
    dealloc<R = void>(): R;
    initWithOriginalString_startingOffset<R = unknown, P0 = unknown, P1 = number>(_initWithOriginalString: P0, _startingOffset: P1): R;
  }
  namespace classes {
    export interface NSSpellingSubstring<T = any> extends cocoa.classes.NSString {
      alloc<R = NSSpellingSubstring>(): R;
      new: <R = NSSpellingSubstring>() => R;
    }
  }
}

declare const NSSpellingSubstring: cocoa.classes.NSSpellingSubstring;
