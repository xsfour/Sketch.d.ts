/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarServiceDelegate<T = any> extends NSObject, NSXPCListenerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    initWithTouchBarService<R = unknown, P0 = unknown>(_initWithTouchBarService: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSQuickActionTouchBarServiceDelegate<T = any> extends NSObject, NSXPCListenerDelegateProtocol {
      alloc<R = _NSQuickActionTouchBarServiceDelegate>(): R;
      new: <R = _NSQuickActionTouchBarServiceDelegate>() => R;
    }
  }
}
