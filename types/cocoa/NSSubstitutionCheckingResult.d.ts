/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSubstitutionCheckingResult<T = any> extends cocoa.NSTextCheckingResult {
    range<R = cocoa._NSRange>(): R;
    dealloc<R = void>(): R;
    initWithRange_replacementString<R = unknown, P0 = cocoa._NSRange, P1 = unknown>(_initWithRange: P0, _replacementString: P1): R;
  }
  namespace classes {
    export interface NSSubstitutionCheckingResult<T = any> extends cocoa.classes.NSTextCheckingResult {
      alloc<R = NSSubstitutionCheckingResult>(): R;
      new: <R = NSSubstitutionCheckingResult>() => R;
    }
  }
}

declare const NSSubstitutionCheckingResult: cocoa.classes.NSSubstitutionCheckingResult;
