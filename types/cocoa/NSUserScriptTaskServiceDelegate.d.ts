/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserScriptTaskServiceDelegate<T = any> extends NSObject, NSXPCListenerDelegateProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSUserScriptTaskServiceDelegate<T = any> extends NSObject, NSXPCListenerDelegateProtocol {
      alloc<R = NSUserScriptTaskServiceDelegate>(): R;
      new: <R = NSUserScriptTaskServiceDelegate>() => R;
    }
  }
}

declare const NSUserScriptTaskServiceDelegate: cocoa.classes.NSUserScriptTaskServiceDelegate;
