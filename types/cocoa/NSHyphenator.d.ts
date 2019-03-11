/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHyphenator<T = any> extends cocoa.NSObject {
    getHyphenLocations_inString_wordAtIndex<R = number, P0 = number, P1 = unknown, P2 = number>(_getHyphenLocations: P0, _inString: P1, _wordAtIndex: P2): R;
    getHyphenLocations_inString<R = number, P0 = number, P1 = unknown>(_getHyphenLocations: P0, _inString: P1): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSHyphenator<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSHyphenator>(): R;
      new: <R = NSHyphenator>() => R;
      sharedInstance<R = unknown>(): R;
    }
  }
}

declare const NSHyphenator: cocoa.classes.NSHyphenator;
