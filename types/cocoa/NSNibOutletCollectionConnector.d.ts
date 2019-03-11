/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNibOutletCollectionConnector<T = any> extends cocoa.NSNibConnector {
    addsContentToExistingCollection<R = boolean>(): R;
    setAddsContentToExistingCollection<R = void, P0 = boolean>(_v: P0): R;
    runtimeCollectionClassName<R = cocoa.NSString>(): R;
    setRuntimeCollectionClassName<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSNibOutletCollectionConnector<T = any> extends cocoa.classes.NSNibConnector {
      alloc<R = NSNibOutletCollectionConnector>(): R;
      new: <R = NSNibOutletCollectionConnector>() => R;
    }
  }
}

declare const NSNibOutletCollectionConnector: cocoa.classes.NSNibOutletCollectionConnector;
