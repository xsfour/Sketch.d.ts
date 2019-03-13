/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSExtensionQuickActionSharingServiceDelegate<T = any> extends NSObject, NSSharingServiceDelegateProtocol {
    cxx_destruct<R = void>(): R;
    initWithQuickAction_requestor<R = unknown, P0 = unknown, P1 = unknown>(_initWithQuickAction: P0, _requestor: P1): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSExtensionQuickActionSharingServiceDelegate<T = any> extends NSObject, NSSharingServiceDelegateProtocol {
      alloc<R = _NSExtensionQuickActionSharingServiceDelegate>(): R;
      new: <R = _NSExtensionQuickActionSharingServiceDelegate>() => R;
    }
  }
}
