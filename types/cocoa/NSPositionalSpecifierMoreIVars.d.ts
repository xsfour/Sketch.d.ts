/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPositionalSpecifierMoreIVars<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface NSPositionalSpecifierMoreIVars<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSPositionalSpecifierMoreIVars>(): R;
      new: <R = NSPositionalSpecifierMoreIVars>() => R;
    }
  }
}

declare const NSPositionalSpecifierMoreIVars: cocoa.classes.NSPositionalSpecifierMoreIVars;
