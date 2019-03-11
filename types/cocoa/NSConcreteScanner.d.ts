/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteScanner<T = any> extends cocoa.NSScanner {
    dealloc<R = void>(): R;
    locale<R = unknown>(): R;
    setLocale<R = void, P0 = unknown>(_setLocale: P0): R;
    caseSensitive<R = boolean>(): R;
    setCaseSensitive<R = void, P0 = boolean>(_setCaseSensitive: P0): R;
    charactersToBeSkipped<R = unknown>(): R;
    setCharactersToBeSkipped<R = void, P0 = unknown>(_setCharactersToBeSkipped: P0): R;
    scanLocation<R = number>(): R;
    setScanLocation<R = void, P0 = number>(_setScanLocation: P0): R;
    string<R = unknown>(): R;
  }
  namespace classes {
    export interface NSConcreteScanner<T = any> extends cocoa.classes.NSScanner {
      alloc<R = NSConcreteScanner>(): R;
      new: <R = NSConcreteScanner>() => R;
    }
  }
}

declare const NSConcreteScanner: cocoa.classes.NSConcreteScanner;
