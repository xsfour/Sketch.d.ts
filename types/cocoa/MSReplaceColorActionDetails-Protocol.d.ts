/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReplaceColorActionDetailsProtocol<T = any> extends cocoa.NSObjectProtocol {
    replacementColor<R = cocoa.MSColor>(): R;
    replaceAlphaOfOriginalColor<R = boolean>(): R;
    originalColor<R = cocoa.MSColor>(): R;
    ignoreAlphaWhenMatchingOriginalColor<R = boolean>(): R;
  }
  namespace classes {
    export interface MSReplaceColorActionDetailsProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSReplaceColorActionDetailsProtocol: cocoa.classes.MSReplaceColorActionDetailsProtocol;
