/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEmojiCheckingResult<T = any> extends cocoa.NSCorrectionCheckingResult {}
  namespace classes {
    export interface NSEmojiCheckingResult<T = any> extends cocoa.classes.NSCorrectionCheckingResult {
      alloc<R = NSEmojiCheckingResult>(): R;
      new: <R = NSEmojiCheckingResult>() => R;
    }
  }
}

declare const NSEmojiCheckingResult: cocoa.classes.NSEmojiCheckingResult;
