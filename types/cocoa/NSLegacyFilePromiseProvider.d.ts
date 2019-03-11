/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLegacyFilePromiseProvider<T = any> extends cocoa.NSObject {
    draggingCancelled<R = void, P0 = unknown>(_draggingCancelled: P0): R;
    draggingEnded<R = void, P0 = unknown>(_draggingEnded: P0): R;
    pasteboardFinishedWithDataProvider<R = void, P0 = unknown>(_pasteboardFinishedWithDataProvider: P0): R;
    pasteboard_provideDataForType<R = void, P0 = unknown, P1 = unknown>(_pasteboard: P0, _provideDataForType: P1): R;
    dealloc<R = void>(): R;
    initWithPasteboard<R = unknown, P0 = unknown>(_initWithPasteboard: P0): R;
    filePromiseProviders<R = cocoa.NSArray>(): R;
    setFilePromiseProviders<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface NSLegacyFilePromiseProvider<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSLegacyFilePromiseProvider>(): R;
      new: <R = NSLegacyFilePromiseProvider>() => R;
    }
  }
}

declare const NSLegacyFilePromiseProvider: cocoa.classes.NSLegacyFilePromiseProvider;
