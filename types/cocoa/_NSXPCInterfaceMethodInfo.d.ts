/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSXPCInterfaceMethodInfo<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    receivesProxyInReply<R = boolean>(): R;
    setReceivesProxyInReply<R = void, P0 = boolean>(_v: P0): R;
    sendsProxyInArgument<R = boolean>(): R;
    setSendsProxyInArgument<R = void, P0 = boolean>(_v: P0): R;
    returnClass<R = unknown>(): R;
    setReturnClass<R = void, P0 = unknown>(_v: P0): R;
    version<R = number>(): R;
    setVersion<R = void, P0 = number>(_v: P0): R;
    replyPosition<R = number>(): R;
    setReplyPosition<R = void, P0 = number>(_v: P0): R;
    arguments<R = cocoa.NSArray>(): R;
    setArguments<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    replyMethodSignature<R = cocoa.NSMethodSignature>(): R;
    setReplyMethodSignature<R = void, P0 = cocoa.NSMethodSignature>(_v: P0): R;
    replyArguments<R = cocoa.NSArray>(): R;
    setReplyArguments<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface _NSXPCInterfaceMethodInfo<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSXPCInterfaceMethodInfo>(): R;
      new: <R = _NSXPCInterfaceMethodInfo>() => R;
    }
  }
}
