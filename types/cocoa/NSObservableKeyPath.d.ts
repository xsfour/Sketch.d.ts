/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObservableKeyPath<T = any> extends cocoa.NSBoundKeyPath, cocoa.NSObservableProtocol {
    _wantsChanges<R = boolean>(): R;
    addObserver<R = unknown, P0 = unknown>(_addObserver: P0): R;
    changes<R = cocoa.NSObservable>(): R;
    description<R = cocoa.NSString>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSObservableKeyPath<T = any> extends cocoa.classes.NSBoundKeyPath, cocoa.classes.NSObservableProtocol {
      alloc<R = NSObservableKeyPath>(): R;
      new: <R = NSObservableKeyPath>() => R;
    }
  }
}

declare const NSObservableKeyPath: cocoa.classes.NSObservableKeyPath;
