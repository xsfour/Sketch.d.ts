/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorReplacement<T = any> extends cocoa.NSObject, cocoa.MSReplaceColorActionDetailsProtocol {
    cxx_destruct<R = void>(): R;
    initWithOriginalColor_replacementColor_ignoreAlphaWhenMatchingOriginalColor_replaceAlphaOfOriginalColor<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean, P3 = boolean>(_initWithOriginalColor: P0, _replacementColor: P1, _ignoreAlphaWhenMatchingOriginalColor: P2, _replaceAlphaOfOriginalColor: P3): R;
    replacementColor<R = cocoa.MSColor>(): R;
    replaceAlphaOfOriginalColor<R = boolean>(): R;
    originalColor<R = cocoa.MSColor>(): R;
    ignoreAlphaWhenMatchingOriginalColor<R = boolean>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSColorReplacement<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSReplaceColorActionDetailsProtocol {
      alloc<R = MSColorReplacement>(): R;
      new: <R = MSColorReplacement>() => R;
    }
  }
}

declare const MSColorReplacement: cocoa.classes.MSColorReplacement;
