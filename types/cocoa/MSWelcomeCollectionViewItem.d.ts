/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeCollectionViewItem<T = any> extends cocoa.NSCollectionViewItem, cocoa.NSMenuDelegateProtocol {
    validateRevealInCloudMenuItem<R = boolean, P0 = unknown>(_validateRevealInCloudMenuItem: P0): R;
    validateRevealInFinderMenuItem<R = boolean, P0 = unknown>(_validateRevealInFinderMenuItem: P0): R;
    fetchPreviewImage<R = void>(): R;
    setRepresentedObject<R = void, P0 = unknown>(_setRepresentedObject: P0): R;
    setSelected<R = void, P0 = boolean>(_setSelected: P0): R;
    progressView<R = cocoa.MSWelcomeProgressView>(): R;
    setProgressView<R = void, P0 = cocoa.MSWelcomeProgressView>(_v: P0): R;
    collectionItem<R = cocoa.MSWelcomeCollectionItem>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSWelcomeCollectionViewItem<T = any> extends cocoa.classes.NSCollectionViewItem, cocoa.classes.NSMenuDelegateProtocol {
      alloc<R = MSWelcomeCollectionViewItem>(): R;
      new: <R = MSWelcomeCollectionViewItem>() => R;
    }
  }
}

declare const MSWelcomeCollectionViewItem: cocoa.classes.MSWelcomeCollectionViewItem;
