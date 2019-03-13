/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNibFinishedLoadingDependentProtocol<T = any> extends NSObjectProtocol {
    _finishedLoadingNibDependencies<R = void>(): R;
    _nibLoadingDependencies<R = NSArray>(): R;
  }
  namespace classes {
    export interface NSNibFinishedLoadingDependentProtocol<T = any> extends NSObjectProtocol {  }
  }
}
