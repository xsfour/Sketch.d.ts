/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSApplicationExtensionSession<T = any> extends NSObject {
    completeSessionReturningItems_error<R = void, P0 = unknown, P1 = unknown>(_completeSessionReturningItems: P0, _error: P1): R;
    inputItems<R = NSArray>(): R;
    extensionType<R = NSString>(): R;
    progress<R = NSProgress>(): R;
    setProgress<R = void, P0 = NSProgress>(_v: P0): R;
  }
  namespace classes {
    export interface NSApplicationExtensionSession<T = any> extends NSObject {
      alloc<R = NSApplicationExtensionSession>(): R;
      new: <R = NSApplicationExtensionSession>() => R;
    }
  }
}

declare const NSApplicationExtensionSession: cocoa.classes.NSApplicationExtensionSession;
