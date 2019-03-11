/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSQuoteCheckingResult<T = any> extends cocoa.NSSubstitutionCheckingResult {
    resultType<R = number>(): R;
  }
  namespace classes {
    export interface NSQuoteCheckingResult<T = any> extends cocoa.classes.NSSubstitutionCheckingResult {
      alloc<R = NSQuoteCheckingResult>(): R;
      new: <R = NSQuoteCheckingResult>() => R;
    }
  }
}

declare const NSQuoteCheckingResult: cocoa.classes.NSQuoteCheckingResult;
