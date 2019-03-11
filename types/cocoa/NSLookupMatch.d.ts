/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLookupMatch<T = any> extends cocoa.NSObject {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithType_range_score<R = unknown, P0 = number, P1 = cocoa._NSRange, P2 = number>(_initWithType: P0, _range: P1, _score: P2): R;
    languageIdentifier<R = cocoa.NSString>(): R;
    setLanguageIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    dataDetectorResult<R = cocoa.NSTextCheckingResult>(): R;
    setDataDetectorResult<R = void, P0 = cocoa.NSTextCheckingResult>(_v: P0): R;
    score<R = number>(): R;
    range<R = cocoa._NSRange>(): R;
    matchType<R = number>(): R;
  }
  namespace classes {
    export interface NSLookupMatch<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSLookupMatch>(): R;
      new: <R = NSLookupMatch>() => R;
      matchesInString_types_range<R = unknown, P0 = unknown, P1 = number, P2 = cocoa._NSRange>(_matchesInString: P0, _types: P1, _range: P2): R;
    }
  }
}

declare const NSLookupMatch: cocoa.classes.NSLookupMatch;
