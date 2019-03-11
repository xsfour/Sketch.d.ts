/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSimpleRegularExpressionCheckingResult<T = any> extends cocoa.NSRegularExpressionCheckingResult {
    rangeArray<R = unknown>(): R;
    range<R = cocoa._NSRange>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSSimpleRegularExpressionCheckingResult<T = any> extends cocoa.classes.NSRegularExpressionCheckingResult {
      alloc<R = NSSimpleRegularExpressionCheckingResult>(): R;
      new: <R = NSSimpleRegularExpressionCheckingResult>() => R;
    }
  }
}

declare const NSSimpleRegularExpressionCheckingResult: cocoa.classes.NSSimpleRegularExpressionCheckingResult;
