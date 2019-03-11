/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSComplexRegularExpressionCheckingResult<T = any> extends cocoa.NSRegularExpressionCheckingResult {
    rangeArray<R = unknown>(): R;
    range<R = cocoa._NSRange>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSComplexRegularExpressionCheckingResult<T = any> extends cocoa.classes.NSRegularExpressionCheckingResult {
      alloc<R = NSComplexRegularExpressionCheckingResult>(): R;
      new: <R = NSComplexRegularExpressionCheckingResult>() => R;
    }
  }
}

declare const NSComplexRegularExpressionCheckingResult: cocoa.classes.NSComplexRegularExpressionCheckingResult;
