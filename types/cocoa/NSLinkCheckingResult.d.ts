/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLinkCheckingResult<T = any> extends cocoa.NSTextCheckingResult {
    range<R = cocoa._NSRange>(): R;
    resultType<R = number>(): R;
    dealloc<R = void>(): R;
    initWithRange_URL<R = unknown, P0 = cocoa._NSRange, P1 = unknown>(_initWithRange: P0, _URL: P1): R;
  }
  namespace classes {
    export interface NSLinkCheckingResult<T = any> extends cocoa.classes.NSTextCheckingResult {
      alloc<R = NSLinkCheckingResult>(): R;
      new: <R = NSLinkCheckingResult>() => R;
    }
  }
}

declare const NSLinkCheckingResult: cocoa.classes.NSLinkCheckingResult;
