/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLanguageContext<T = any> extends cocoa.NSMutableDictionary {}
  namespace classes {
    export interface NSLanguageContext<T = any> extends cocoa.classes.NSMutableDictionary {
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
      availableLanguageContextNames<R = unknown>(): R;
      languageContextWithName<R = unknown, P0 = unknown>(_languageContextWithName: P0): R;
      systemLanguageContext<R = unknown>(): R;
      defaultLanguageContext<R = unknown>(): R;
    }
  }
}

declare const NSLanguageContext: cocoa.classes.NSLanguageContext;
