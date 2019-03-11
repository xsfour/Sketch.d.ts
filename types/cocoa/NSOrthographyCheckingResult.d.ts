/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOrthographyCheckingResult<T = any> extends cocoa.NSTextCheckingResult {
    range<R = cocoa._NSRange>(): R;
    resultType<R = number>(): R;
    dealloc<R = void>(): R;
    initWithRange_orthography<R = unknown, P0 = cocoa._NSRange, P1 = unknown>(_initWithRange: P0, _orthography: P1): R;
  }
  namespace classes {
    export interface NSOrthographyCheckingResult<T = any> extends cocoa.classes.NSTextCheckingResult {
      alloc<R = NSOrthographyCheckingResult>(): R;
      new: <R = NSOrthographyCheckingResult>() => R;
    }
  }
}

declare const NSOrthographyCheckingResult: cocoa.classes.NSOrthographyCheckingResult;
