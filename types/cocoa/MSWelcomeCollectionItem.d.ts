/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeCollectionItem<T = any> extends cocoa.NSObject, cocoa.MSWelcomeCollectionItemPreviewImageLoadingProtocol {
    cxx_destruct<R = void>(): R;
    initWithController<R = unknown, P0 = unknown>(_initWithController: P0): R;
    cachedPreviewImage<R = cocoa.NSImage>(): R;
    setCachedPreviewImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    welcomeWindowController<R = cocoa.MSWelcomeWindowController>(): R;
    setWelcomeWindowController<R = void, P0 = cocoa.MSWelcomeWindowController>(_v: P0): R;
    title<R = cocoa.NSString>(): R;
    providesPreviewImage<R = boolean>(): R;
    placeholderImage<R = cocoa.NSImage>(): R;
    URL<R = cocoa.NSURL>(): R;
  }
  namespace classes {
    export interface MSWelcomeCollectionItem<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSWelcomeCollectionItemPreviewImageLoadingProtocol {
      alloc<R = MSWelcomeCollectionItem>(): R;
      new: <R = MSWelcomeCollectionItem>() => R;
      userTemplatesDirectoryURL<R = unknown>(): R;
      bundledTemplatesDirectoryURL<R = unknown>(): R;
    }
  }
}

declare const MSWelcomeCollectionItem: cocoa.classes.MSWelcomeCollectionItem;
