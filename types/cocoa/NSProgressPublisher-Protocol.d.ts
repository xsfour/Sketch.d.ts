/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSProgressPublisherProtocol<T = any> extends cocoa.NSObjectProtocol {
    appWithBundleID_didAcknowledgeWithSuccess<R = void, P0 = cocoa.NSString, P1 = boolean>(_appWithBundleID: P0, _didAcknowledgeWithSuccess: P1): R;
    prioritize<R = void>(): R;
    resume<R = void>(): R;
    pause<R = void>(): R;
    cancel<R = void>(): R;
  }
  namespace classes {
    export interface NSProgressPublisherProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSProgressPublisherProtocol: cocoa.classes.NSProgressPublisherProtocol;
