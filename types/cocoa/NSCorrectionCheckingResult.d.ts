/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCorrectionCheckingResult<T = any> extends NSSubstitutionCheckingResult {
    resultType<R = number>(): R;
    initWithRange_replacementString_alternativeStrings<R = unknown, P0 = _NSRange, P1 = unknown, P2 = unknown>(_initWithRange: P0, _replacementString: P1, _alternativeStrings: P2): R;
  }
  namespace classes {
    export interface NSCorrectionCheckingResult<T = any> extends NSSubstitutionCheckingResult {
      alloc<R = NSCorrectionCheckingResult>(): R;
      new: <R = NSCorrectionCheckingResult>() => R;
    }
  }
}

declare const NSCorrectionCheckingResult: cocoa.classes.NSCorrectionCheckingResult;
