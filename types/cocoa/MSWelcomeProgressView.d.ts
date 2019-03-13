/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeProgressView<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
    progressIndicator<R = NSProgressIndicator>(): R;
    setProgressIndicator<R = void, P0 = NSProgressIndicator>(_v: P0): R;
    collectionItem<R = MSCloudShareCollectionItem>(): R;
    setCollectionItem<R = void, P0 = MSCloudShareCollectionItem>(_v: P0): R;
    backgroundColor<R = NSColor>(): R;
    setBackgroundColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface MSWelcomeProgressView<T = any> extends NSView {
      alloc<R = MSWelcomeProgressView>(): R;
      new: <R = MSWelcomeProgressView>() => R;
    }
  }
}

declare const MSWelcomeProgressView: cocoa.classes.MSWelcomeProgressView;
