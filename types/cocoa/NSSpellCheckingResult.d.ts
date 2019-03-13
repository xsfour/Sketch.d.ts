/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSpellCheckingResult<T = any> extends NSTextCheckingResult {
    range<R = _NSRange>(): R;
    resultType<R = number>(): R;
    initWithRange<R = unknown, P0 = _NSRange>(_initWithRange: P0): R;
  }
  namespace classes {
    export interface NSSpellCheckingResult<T = any> extends NSTextCheckingResult {
      alloc<R = NSSpellCheckingResult>(): R;
      new: <R = NSSpellCheckingResult>() => R;
    }
  }
}

declare const NSSpellCheckingResult: cocoa.classes.NSSpellCheckingResult;
