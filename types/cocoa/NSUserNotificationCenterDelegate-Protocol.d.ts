/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserNotificationCenterDelegateProtocol<T = any> extends NSObjectProtocol {
    userNotificationCenter_shouldPresentNotification<R = boolean, P0 = NSUserNotificationCenter, P1 = NSUserNotification>(_userNotificationCenter: P0, _shouldPresentNotification: P1): R;
    userNotificationCenter_didActivateNotification<R = void, P0 = NSUserNotificationCenter, P1 = NSUserNotification>(_userNotificationCenter: P0, _didActivateNotification: P1): R;
    userNotificationCenter_didDeliverNotification<R = void, P0 = NSUserNotificationCenter, P1 = NSUserNotification>(_userNotificationCenter: P0, _didDeliverNotification: P1): R;
  }
  namespace classes {
    export interface NSUserNotificationCenterDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
