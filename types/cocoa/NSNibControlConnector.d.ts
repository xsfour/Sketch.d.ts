/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNibControlConnector<T = any> extends cocoa.NSNibConnector {}
  namespace classes {
    export interface NSNibControlConnector<T = any> extends cocoa.classes.NSNibConnector {
      alloc<R = NSNibControlConnector>(): R;
      new: <R = NSNibControlConnector>() => R;
    }
  }
}

declare const NSNibControlConnector: cocoa.classes.NSNibControlConnector;
