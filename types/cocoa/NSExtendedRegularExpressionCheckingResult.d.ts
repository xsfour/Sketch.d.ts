/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExtendedRegularExpressionCheckingResult<T = any> extends NSRegularExpressionCheckingResult {
    rangeArray<R = unknown>(): R;
    range<R = _NSRange>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSExtendedRegularExpressionCheckingResult<T = any> extends NSRegularExpressionCheckingResult {
      alloc<R = NSExtendedRegularExpressionCheckingResult>(): R;
      new: <R = NSExtendedRegularExpressionCheckingResult>() => R;
    }
  }
}

declare const NSExtendedRegularExpressionCheckingResult: cocoa.classes.NSExtendedRegularExpressionCheckingResult;
