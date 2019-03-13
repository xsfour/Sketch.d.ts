/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSComplexRegularExpressionCheckingResult<T = any> extends NSRegularExpressionCheckingResult {
    rangeArray<R = unknown>(): R;
    range<R = _NSRange>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSComplexRegularExpressionCheckingResult<T = any> extends NSRegularExpressionCheckingResult {
      alloc<R = NSComplexRegularExpressionCheckingResult>(): R;
      new: <R = NSComplexRegularExpressionCheckingResult>() => R;
    }
  }
}

declare const NSComplexRegularExpressionCheckingResult: cocoa.classes.NSComplexRegularExpressionCheckingResult;
