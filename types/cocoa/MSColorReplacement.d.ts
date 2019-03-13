/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorReplacement<T = any> extends NSObject, MSReplaceColorActionDetailsProtocol {
    cxx_destruct<R = void>(): R;
    initWithOriginalColor_replacementColor_ignoreAlphaWhenMatchingOriginalColor_replaceAlphaOfOriginalColor<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean, P3 = boolean>(_initWithOriginalColor: P0, _replacementColor: P1, _ignoreAlphaWhenMatchingOriginalColor: P2, _replaceAlphaOfOriginalColor: P3): R;
    replacementColor<R = MSColor>(): R;
    replaceAlphaOfOriginalColor<R = boolean>(): R;
    originalColor<R = MSColor>(): R;
    ignoreAlphaWhenMatchingOriginalColor<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSColorReplacement<T = any> extends NSObject, MSReplaceColorActionDetailsProtocol {
      alloc<R = MSColorReplacement>(): R;
      new: <R = MSColorReplacement>() => R;
    }
  }
}

declare const MSColorReplacement: cocoa.classes.MSColorReplacement;
