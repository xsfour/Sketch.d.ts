/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeCollectionViewItem<T = any> extends NSCollectionViewItem, NSMenuDelegateProtocol {
    validateRevealInCloudMenuItem<R = boolean, P0 = unknown>(_validateRevealInCloudMenuItem: P0): R;
    validateRevealInFinderMenuItem<R = boolean, P0 = unknown>(_validateRevealInFinderMenuItem: P0): R;
    fetchPreviewImage<R = void>(): R;
    setRepresentedObject<R = void, P0 = unknown>(_setRepresentedObject: P0): R;
    setSelected<R = void, P0 = boolean>(_setSelected: P0): R;
    progressView<R = MSWelcomeProgressView>(): R;
    setProgressView<R = void, P0 = MSWelcomeProgressView>(_v: P0): R;
    collectionItem<R = MSWelcomeCollectionItem>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSWelcomeCollectionViewItem<T = any> extends NSCollectionViewItem, NSMenuDelegateProtocol {
      alloc<R = MSWelcomeCollectionViewItem>(): R;
      new: <R = MSWelcomeCollectionViewItem>() => R;
    }
  }
}

declare const MSWelcomeCollectionViewItem: cocoa.classes.MSWelcomeCollectionViewItem;
