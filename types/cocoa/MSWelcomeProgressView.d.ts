/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeProgressView<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    progressIndicator<R = cocoa.NSProgressIndicator>(): R;
    setProgressIndicator<R = void, P0 = cocoa.NSProgressIndicator>(_v: P0): R;
    collectionItem<R = cocoa.MSCloudShareCollectionItem>(): R;
    setCollectionItem<R = void, P0 = cocoa.MSCloudShareCollectionItem>(_v: P0): R;
    backgroundColor<R = cocoa.NSColor>(): R;
    setBackgroundColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface MSWelcomeProgressView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSWelcomeProgressView>(): R;
      new: <R = MSWelcomeProgressView>() => R;
    }
  }
}

declare const MSWelcomeProgressView: cocoa.classes.MSWelcomeProgressView;
