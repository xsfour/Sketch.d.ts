/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSApplicationBundlePresenter<T = any> extends NSObject, NSFilePresenterProtocol {
    presentedItemOperationQueue<R = NSOperationQueue>(): R;
    presentedItemURL<R = NSURL>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    observedPresentedItemUbiquityAttributes<R = NSSet>(): R;
    primaryPresentedItemURL<R = NSURL>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSApplicationBundlePresenter<T = any> extends NSObject, NSFilePresenterProtocol {
      alloc<R = NSApplicationBundlePresenter>(): R;
      new: <R = NSApplicationBundlePresenter>() => R;
    }
  }
}

declare const NSApplicationBundlePresenter: cocoa.classes.NSApplicationBundlePresenter;
