/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowRestorationProtocol<T = any> extends NSObjectProtocol {}
  namespace classes {
    export interface NSWindowRestorationProtocol<T = any> extends NSObjectProtocol {
      restoreWindowWithIdentifier_state_completionHandler<R = void, P0 = NSString, P1 = NSCoder, P2 = CDUnknownBlockType>(_restoreWindowWithIdentifier: P0, _state: P1, _completionHandler: P2): R;
    }
  }
}
