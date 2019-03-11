/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExtendedRegularExpressionCheckingResult<T = any> extends cocoa.NSRegularExpressionCheckingResult {
    rangeArray<R = unknown>(): R;
    range<R = cocoa._NSRange>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSExtendedRegularExpressionCheckingResult<T = any> extends cocoa.classes.NSRegularExpressionCheckingResult {
      alloc<R = NSExtendedRegularExpressionCheckingResult>(): R;
      new: <R = NSExtendedRegularExpressionCheckingResult>() => R;
    }
  }
}

declare const NSExtendedRegularExpressionCheckingResult: cocoa.classes.NSExtendedRegularExpressionCheckingResult;
