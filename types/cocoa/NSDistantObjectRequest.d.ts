/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDistantObjectRequest<T = any> extends cocoa.NSObject {
    replyWithException<R = void, P0 = unknown>(_replyWithException: P0): R;
    conversation<R = unknown>(): R;
    connection<R = cocoa.NSConnection>(): R;
    invocation<R = cocoa.NSInvocation>(): R;
  }
  namespace classes {
    export interface NSDistantObjectRequest<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSDistantObjectRequest>(): R;
      new: <R = NSDistantObjectRequest>() => R;
    }
  }
}

declare const NSDistantObjectRequest: cocoa.classes.NSDistantObjectRequest;
