/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNibOutletConnector<T = any> extends NSNibConnector {
    _shouldUseSelector_forOutlet_source<R = boolean, P0 = string, P1 = unknown, P2 = unknown>(__shouldUseSelector: P0, _forOutlet: P1, _source: P2): R;
  }
  namespace classes {
    export interface NSNibOutletConnector<T = any> extends NSNibConnector {
      alloc<R = NSNibOutletConnector>(): R;
      new: <R = NSNibOutletConnector>() => R;
    }
  }
}

declare const NSNibOutletConnector: cocoa.classes.NSNibOutletConnector;
