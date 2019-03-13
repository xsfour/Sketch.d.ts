/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSReplacementCheckingResult<T = any> extends NSSubstitutionCheckingResult {
    resultType<R = number>(): R;
  }
  namespace classes {
    export interface NSReplacementCheckingResult<T = any> extends NSSubstitutionCheckingResult {
      alloc<R = NSReplacementCheckingResult>(): R;
      new: <R = NSReplacementCheckingResult>() => R;
    }
  }
}

declare const NSReplacementCheckingResult: cocoa.classes.NSReplacementCheckingResult;
