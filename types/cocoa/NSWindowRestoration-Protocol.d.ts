/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowRestorationProtocol<T = any> extends cocoa.NSObjectProtocol {}
  namespace classes {
    export interface NSWindowRestorationProtocol<T = any> extends cocoa.classes.NSObjectProtocol {
      restoreWindowWithIdentifier_state_completionHandler<R = void, P0 = cocoa.NSString, P1 = cocoa.NSCoder, P2 = cocoa.CDUnknownBlockType>(_restoreWindowWithIdentifier: P0, _state: P1, _completionHandler: P2): R;
    }
  }
}

declare const NSWindowRestorationProtocol: cocoa.classes.NSWindowRestorationProtocol;
