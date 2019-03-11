/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginLogActionProtocol<T = any> {
    logString<R = cocoa.NSString>(): R;
    clearLog<R = void>(): R;
    log<R = void, P0 = cocoa.NSDictionary>(_log: P0): R;
  }
  namespace classes {
    export interface MSPluginLogActionProtocol<T = any> {  }
  }
}

declare const MSPluginLogActionProtocol: cocoa.classes.MSPluginLogActionProtocol;
