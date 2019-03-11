/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInvocation<T = any> {
    // + NSInvocation(NSInvocationDebugDescription,NSXPCConnectionExtensions):
    debugDescription<R = unknown>(): R;
    _hasBlockArgument<R = boolean>(): R;
    setUserInfo<R = void, P0 = unknown>(_setUserInfo: P0): R;
    userInfo<R = unknown>(): R;
  }
  namespace classes {
    export interface NSInvocation<T = any> {
      // + NSInvocation(NSInvocationDebugDescription,NSXPCConnectionExtensions):
      
    }
  }
}

declare const NSInvocation: cocoa.classes.NSInvocation;
