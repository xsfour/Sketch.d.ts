/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHMDDisplayLinkInvocation<T = any> extends NSObject {
    duration<R = number>(): R;
    timestamp<R = number>(): R;
  }
  namespace classes {
    export interface NSHMDDisplayLinkInvocation<T = any> extends NSObject {
      alloc<R = NSHMDDisplayLinkInvocation>(): R;
      new: <R = NSHMDDisplayLinkInvocation>() => R;
    }
  }
}

declare const NSHMDDisplayLinkInvocation: cocoa.classes.NSHMDDisplayLinkInvocation;
