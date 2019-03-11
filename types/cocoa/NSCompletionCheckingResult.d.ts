/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCompletionCheckingResult<T = any> extends cocoa.NSSubstitutionCheckingResult {
    resultType<R = number>(): R;
  }
  namespace classes {
    export interface NSCompletionCheckingResult<T = any> extends cocoa.classes.NSSubstitutionCheckingResult {
      alloc<R = NSCompletionCheckingResult>(): R;
      new: <R = NSCompletionCheckingResult>() => R;
    }
  }
}

declare const NSCompletionCheckingResult: cocoa.classes.NSCompletionCheckingResult;
