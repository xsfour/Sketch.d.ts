/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReplaceColorActionDetailsProtocol<T = any> extends NSObjectProtocol {
    replacementColor<R = MSColor>(): R;
    replaceAlphaOfOriginalColor<R = boolean>(): R;
    originalColor<R = MSColor>(): R;
    ignoreAlphaWhenMatchingOriginalColor<R = boolean>(): R;
  }
  namespace classes {
    export interface MSReplaceColorActionDetailsProtocol<T = any> extends NSObjectProtocol {  }
  }
}
