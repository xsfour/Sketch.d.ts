/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMachBootstrapServer<T = any> extends cocoa.NSPortNameServer {
    servicePortWithName<R = unknown, P0 = unknown>(_servicePortWithName: P0): R;
    portForName_options<R = unknown, P0 = unknown, P1 = number>(_portForName: P0, _options: P1): R;
  }
  namespace classes {
    export interface NSMachBootstrapServer<T = any> extends cocoa.classes.NSPortNameServer {
      alloc<R = NSMachBootstrapServer>(): R;
      new: <R = NSMachBootstrapServer>() => R;
      sharedInstance<R = unknown>(): R;
    }
  }
}

declare const NSMachBootstrapServer: cocoa.classes.NSMachBootstrapServer;
