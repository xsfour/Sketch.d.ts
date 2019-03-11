/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObserverKeyPath<T = any> extends cocoa.NSBoundKeyPath, cocoa.NSOwningObserverProtocol, cocoa.NSObserverProtocol {
    _receiveBox<R = void, P0 = unknown>(__receiveBox: P0): R;
    description<R = cocoa.NSString>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSObserverKeyPath<T = any> extends cocoa.classes.NSBoundKeyPath, cocoa.classes.NSOwningObserverProtocol, cocoa.classes.NSObserverProtocol {
      alloc<R = NSObserverKeyPath>(): R;
      new: <R = NSObserverKeyPath>() => R;
    }
  }
}

declare const NSObserverKeyPath: cocoa.classes.NSObserverKeyPath;
