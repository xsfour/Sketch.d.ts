/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarClientProtocolProtocol<T = any> {
    invokeQuickActionWithIdentifier<R = void, P0 = cocoa.NSString>(_invokeQuickActionWithIdentifier: P0): R;
    quickActionTouchBarDidHide<R = void>(): R;
    quickActionTouchBarWillShow<R = void>(): R;
  }
  namespace classes {
    export interface _NSQuickActionTouchBarClientProtocolProtocol<T = any> {  }
  }
}
