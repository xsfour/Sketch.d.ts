/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNibFinishedLoadingDependentProtocol<T = any> extends cocoa.NSObjectProtocol {
    _finishedLoadingNibDependencies<R = void>(): R;
    _nibLoadingDependencies<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface NSNibFinishedLoadingDependentProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSNibFinishedLoadingDependentProtocol: cocoa.classes.NSNibFinishedLoadingDependentProtocol;
