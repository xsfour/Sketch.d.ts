/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObserverKeyPath<T = any> extends NSBoundKeyPath, NSOwningObserverProtocol, NSObserverProtocol {
    _receiveBox<R = void, P0 = unknown>(__receiveBox: P0): R;
    description<R = NSString>(): R;
    debugDescription<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSObserverKeyPath<T = any> extends NSBoundKeyPath, NSOwningObserverProtocol, NSObserverProtocol {
      alloc<R = NSObserverKeyPath>(): R;
      new: <R = NSObserverKeyPath>() => R;
    }
  }
}

declare const NSObserverKeyPath: cocoa.classes.NSObserverKeyPath;
