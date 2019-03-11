/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWorkspaceAuthorization<T = any> extends cocoa.NSObject {
    data<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithAuthorizationRef_ofType<R = unknown, P0 = cocoa.AuthorizationOpaqueRef, P1 = number>(_initWithAuthorizationRef: P0, _ofType: P1): R;
  }
  namespace classes {
    export interface NSWorkspaceAuthorization<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSWorkspaceAuthorization>(): R;
      new: <R = NSWorkspaceAuthorization>() => R;
    }
  }
}

declare const NSWorkspaceAuthorization: cocoa.classes.NSWorkspaceAuthorization;
