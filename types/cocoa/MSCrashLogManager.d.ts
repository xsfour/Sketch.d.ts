/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCrashLogManager<T = any> extends cocoa.NSObject, cocoa.MSActionObserverProtocol, cocoa.BITHockeyManagerDelegateProtocol, cocoa.BITCrashManagerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    setup<R = boolean>(): R;
    environmentText<R = unknown>(): R;
    logText<R = unknown>(): R;
    appSupportURL<R = unknown>(): R;
    setEnvironmentValue_forKey<R = void, P0 = unknown, P1 = unknown>(_setEnvironmentValue: P0, _forKey: P1): R;
    log<R = void, P0 = unknown>(_log: P0): R;
    text<R = cocoa.NSString>(): R;
    environment<R = cocoa.NSDictionary>(): R;
    items<R = cocoa.NSArray>(): R;
    environmentURL<R = cocoa.NSURL>(): R;
    logURL<R = cocoa.NSURL>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSCrashLogManager<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSActionObserverProtocol, cocoa.classes.BITHockeyManagerDelegateProtocol, cocoa.classes.BITCrashManagerDelegateProtocol {
      alloc<R = MSCrashLogManager>(): R;
      new: <R = MSCrashLogManager>() => R;
    }
  }
}

declare const MSCrashLogManager: cocoa.classes.MSCrashLogManager;
