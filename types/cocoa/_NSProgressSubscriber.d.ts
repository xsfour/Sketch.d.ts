/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSProgressSubscriber<T = any> extends cocoa.NSObject, cocoa.NSProgressSubscriberProtocol {
    stop<R = void>(): R;
    startForFileURL<R = void, P0 = unknown>(_startForFileURL: P0): R;
    startForCategory<R = void, P0 = unknown>(_startForCategory: P0): R;
    dealloc<R = void>(): R;
    initWithPublishingHandler<R = unknown, P0 = cocoa.CDUnknownBlockType>(_initWithPublishingHandler: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSProgressSubscriber<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSProgressSubscriberProtocol {
      alloc<R = _NSProgressSubscriber>(): R;
      new: <R = _NSProgressSubscriber>() => R;
    }
  }
}
