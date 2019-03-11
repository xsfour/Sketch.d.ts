/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSpellCheckingResult<T = any> extends cocoa.NSTextCheckingResult {
    range<R = cocoa._NSRange>(): R;
    resultType<R = number>(): R;
    initWithRange<R = unknown, P0 = cocoa._NSRange>(_initWithRange: P0): R;
  }
  namespace classes {
    export interface NSSpellCheckingResult<T = any> extends cocoa.classes.NSTextCheckingResult {
      alloc<R = NSSpellCheckingResult>(): R;
      new: <R = NSSpellCheckingResult>() => R;
    }
  }
}

declare const NSSpellCheckingResult: cocoa.classes.NSSpellCheckingResult;
