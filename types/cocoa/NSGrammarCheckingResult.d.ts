/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGrammarCheckingResult<T = any> extends cocoa.NSTextCheckingResult {
    range<R = cocoa._NSRange>(): R;
    resultType<R = number>(): R;
    dealloc<R = void>(): R;
    initWithRange_details<R = unknown, P0 = cocoa._NSRange, P1 = unknown>(_initWithRange: P0, _details: P1): R;
  }
  namespace classes {
    export interface NSGrammarCheckingResult<T = any> extends cocoa.classes.NSTextCheckingResult {
      alloc<R = NSGrammarCheckingResult>(): R;
      new: <R = NSGrammarCheckingResult>() => R;
    }
  }
}

declare const NSGrammarCheckingResult: cocoa.classes.NSGrammarCheckingResult;
