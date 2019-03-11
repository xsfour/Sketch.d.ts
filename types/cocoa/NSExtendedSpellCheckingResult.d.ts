/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExtendedSpellCheckingResult<T = any> extends cocoa.NSSpellCheckingResult {
    isSentenceCorrectionResult<R = boolean>(): R;
    detail<R = unknown>(): R;
    sentenceRange<R = cocoa._NSRange>(): R;
    dealloc<R = void>(): R;
    initWithRange_sentenceRange_detail<R = unknown, P0 = cocoa._NSRange, P1 = cocoa._NSRange, P2 = unknown>(_initWithRange: P0, _sentenceRange: P1, _detail: P2): R;
  }
  namespace classes {
    export interface NSExtendedSpellCheckingResult<T = any> extends cocoa.classes.NSSpellCheckingResult {
      alloc<R = NSExtendedSpellCheckingResult>(): R;
      new: <R = NSExtendedSpellCheckingResult>() => R;
    }
  }
}

declare const NSExtendedSpellCheckingResult: cocoa.classes.NSExtendedSpellCheckingResult;
