/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLSNotificationHelper<T = any> extends NSObject {
    isNonEmpty<R = boolean>(): R;
    removeEntryAndReturnIfEmpty<R = boolean, P0 = unknown>(_removeEntryAndReturnIfEmpty: P0): R;
    addEntryAndReturnIfWasEmpty<R = boolean, P0 = unknown>(_addEntryAndReturnIfWasEmpty: P0): R;
  }
  namespace classes {
    export interface NSLSNotificationHelper<T = any> extends NSObject {
      alloc<R = NSLSNotificationHelper>(): R;
      new: <R = NSLSNotificationHelper>() => R;
    }
  }
}

declare const NSLSNotificationHelper: cocoa.classes.NSLSNotificationHelper;
