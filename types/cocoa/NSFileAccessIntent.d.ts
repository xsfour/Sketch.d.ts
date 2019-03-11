/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileAccessIntent<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    description<R = unknown>(): R;
    isRead<R = boolean>(): R;
    URL<R = cocoa.NSURL>(): R;
    setURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    writingOptions<R = number>(): R;
    readingOptions<R = number>(): R;
  }
  namespace classes {
    export interface NSFileAccessIntent<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSFileAccessIntent>(): R;
      new: <R = NSFileAccessIntent>() => R;
      writingIntentWithURL_options<R = unknown, P0 = unknown, P1 = number>(_writingIntentWithURL: P0, _options: P1): R;
      readingIntentWithURL_options<R = unknown, P0 = unknown, P1 = number>(_readingIntentWithURL: P0, _options: P1): R;
    }
  }
}

declare const NSFileAccessIntent: cocoa.classes.NSFileAccessIntent;
