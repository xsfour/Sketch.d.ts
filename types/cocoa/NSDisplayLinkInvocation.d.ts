/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDisplayLinkInvocation<T = any> extends cocoa.NSObject {
    duration<R = number>(): R;
    timestamp<R = number>(): R;
  }
  namespace classes {
    export interface NSDisplayLinkInvocation<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSDisplayLinkInvocation>(): R;
      new: <R = NSDisplayLinkInvocation>() => R;
    }
  }
}

declare const NSDisplayLinkInvocation: cocoa.classes.NSDisplayLinkInvocation;
