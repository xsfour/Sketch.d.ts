/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSApplicationBundlePresenter<T = any> extends cocoa.NSObject, cocoa.NSFilePresenterProtocol {
    presentedItemOperationQueue<R = cocoa.NSOperationQueue>(): R;
    presentedItemURL<R = cocoa.NSURL>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    observedPresentedItemUbiquityAttributes<R = cocoa.NSSet>(): R;
    primaryPresentedItemURL<R = cocoa.NSURL>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSApplicationBundlePresenter<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSFilePresenterProtocol {
      alloc<R = NSApplicationBundlePresenter>(): R;
      new: <R = NSApplicationBundlePresenter>() => R;
    }
  }
}

declare const NSApplicationBundlePresenter: cocoa.classes.NSApplicationBundlePresenter;
