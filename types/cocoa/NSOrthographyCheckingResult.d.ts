/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOrthographyCheckingResult<T = any> extends NSTextCheckingResult {
    range<R = _NSRange>(): R;
    resultType<R = number>(): R;
    dealloc<R = void>(): R;
    initWithRange_orthography<R = unknown, P0 = _NSRange, P1 = unknown>(_initWithRange: P0, _orthography: P1): R;
  }
  namespace classes {
    export interface NSOrthographyCheckingResult<T = any> extends NSTextCheckingResult {
      alloc<R = NSOrthographyCheckingResult>(): R;
      new: <R = NSOrthographyCheckingResult>() => R;
    }
  }
}

declare const NSOrthographyCheckingResult: cocoa.classes.NSOrthographyCheckingResult;
