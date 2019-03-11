/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSharingService_Subsystem<T = any> extends cocoa.NSObject, cocoa.PKModularServiceProtocol {
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSSharingService_Subsystem<T = any> extends cocoa.classes.NSObject, cocoa.classes.PKModularServiceProtocol {
      alloc<R = NSSharingService_Subsystem>(): R;
      new: <R = NSSharingService_Subsystem>() => R;
    }
  }
}

declare const NSSharingService_Subsystem: cocoa.classes.NSSharingService_Subsystem;
