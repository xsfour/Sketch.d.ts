/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSProgressSubscriberProxy<T = any> extends cocoa.NSObject, cocoa.NSProgressSubscriberProtocol {
    isFromConnection<R = boolean, P0 = unknown>(_isFromConnection: P0): R;
    descriptionWithIndenting<R = unknown, P0 = unknown>(_descriptionWithIndenting: P0): R;
    appBundleID<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithForwarder_onConnection_subscriberID_appBundleID<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithForwarder: P0, _onConnection: P1, _subscriberID: P2, _appBundleID: P3): R;
    category<R = cocoa.NSString>(): R;
    setCategory<R = void, P0 = cocoa.NSString>(_v: P0): R;
    description<R = cocoa.NSString>(): R;
    itemLocation<R = cocoa.NSFileAccessNode>(): R;
    setItemLocation<R = void, P0 = cocoa.NSFileAccessNode>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSProgressSubscriberProxy<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSProgressSubscriberProtocol {
      alloc<R = NSProgressSubscriberProxy>(): R;
      new: <R = NSProgressSubscriberProxy>() => R;
    }
  }
}

declare const NSProgressSubscriberProxy: cocoa.classes.NSProgressSubscriberProxy;
