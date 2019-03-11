/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileWritingWritingClaim<T = any> extends cocoa.NSFileAccessClaim {
    allURLs<R = unknown>(): R;
    blocksClaim<R = boolean, P0 = unknown>(_blocksClaim: P0): R;
    resolveURLsThenContinueInvokingClaimer<R = void, P0 = cocoa.CDUnknownBlockType>(_resolveURLsThenContinueInvokingClaimer: P0): R;
    initWithPurposeID_url_options_url_options_claimer<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown, P4 = number, P5 = cocoa.CDUnknownBlockType>(_initWithPurposeID: P0, _url: P1, _options: P2, _url1: P3, _options1: P4, _claimer: P5): R;
  }
  namespace classes {
    export interface NSFileWritingWritingClaim<T = any> extends cocoa.classes.NSFileAccessClaim {
      alloc<R = NSFileWritingWritingClaim>(): R;
      new: <R = NSFileWritingWritingClaim>() => R;
    }
  }
}

declare const NSFileWritingWritingClaim: cocoa.classes.NSFileWritingWritingClaim;
