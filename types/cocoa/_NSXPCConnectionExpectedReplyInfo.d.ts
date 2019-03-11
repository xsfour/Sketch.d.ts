/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSXPCConnectionExpectedReplyInfo<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    proxyNumber<R = number>(): R;
    setProxyNumber<R = void, P0 = number>(_v: P0): R;
    userInfo<R = cocoa.NSDictionary>(): R;
    setUserInfo<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    interface<R = cocoa.NSXPCInterface>(): R;
    setInterface<R = void, P0 = cocoa.NSXPCInterface>(_v: P0): R;
    cleanupBlock<R = cocoa.CDUnknownBlockType>(): R;
    setCleanupBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    errorBlock<R = cocoa.CDUnknownBlockType>(): R;
    setErrorBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    replyBlock<R = cocoa.NSBlock>(): R;
    setReplyBlock<R = void, P0 = cocoa.NSBlock>(_v: P0): R;
    selector<R = string>(): R;
    setSelector<R = void, P0 = string>(_v: P0): R;
  }
  namespace classes {
    export interface _NSXPCConnectionExpectedReplyInfo<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSXPCConnectionExpectedReplyInfo>(): R;
      new: <R = _NSXPCConnectionExpectedReplyInfo>() => R;
    }
  }
}
