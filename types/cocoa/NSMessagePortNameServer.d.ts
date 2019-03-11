/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMessagePortNameServer<T = any> extends cocoa.NSPortNameServer {}
  namespace classes {
    export interface NSMessagePortNameServer<T = any> extends cocoa.classes.NSPortNameServer {
      alloc<R = NSMessagePortNameServer>(): R;
      new: <R = NSMessagePortNameServer>() => R;
      sharedInstance<R = unknown>(): R;
    }
  }
}

declare const NSMessagePortNameServer: cocoa.classes.NSMessagePortNameServer;
