/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNotification<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol, cocoa.NSCodingProtocol {
    initWithName_object_userInfo<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithName: P0, _object: P1, _userInfo: P2): R;
    classForCoder<R = unknown>(): R;
    hash<R = number>(): R;
    description<R = unknown>(): R;
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    userInfo<R = cocoa.NSDictionary>(): R;
    object<R = unknown>(): R;
    name<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSNotification<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSCodingProtocol {
      alloc<R = NSNotification>(): R;
      new: <R = NSNotification>() => R;
      notificationWithName_object_userInfo<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_notificationWithName: P0, _object: P1, _userInfo: P2): R;
      notificationWithName_object<R = unknown, P0 = unknown, P1 = unknown>(_notificationWithName: P0, _object: P1): R;
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSNotification: cocoa.classes.NSNotification;
