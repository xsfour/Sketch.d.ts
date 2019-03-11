/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSpellingLanguageTableView<T = any> extends cocoa.NSTableView {}
  namespace classes {
    export interface NSSpellingLanguageTableView<T = any> extends cocoa.classes.NSTableView {
      alloc<R = NSSpellingLanguageTableView>(): R;
      new: <R = NSSpellingLanguageTableView>() => R;
    }
  }
}

declare const NSSpellingLanguageTableView: cocoa.classes.NSSpellingLanguageTableView;
