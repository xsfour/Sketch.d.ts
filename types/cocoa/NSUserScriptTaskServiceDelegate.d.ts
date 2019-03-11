/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserScriptTaskServiceDelegate<T = any> extends cocoa.NSObject, cocoa.NSXPCListenerDelegateProtocol {
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSUserScriptTaskServiceDelegate<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSXPCListenerDelegateProtocol {
      alloc<R = NSUserScriptTaskServiceDelegate>(): R;
      new: <R = NSUserScriptTaskServiceDelegate>() => R;
    }
  }
}

declare const NSUserScriptTaskServiceDelegate: cocoa.classes.NSUserScriptTaskServiceDelegate;
