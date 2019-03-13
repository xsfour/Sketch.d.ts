/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginLogActionProtocol<T = any> {
    logString<R = NSString>(): R;
    clearLog<R = void>(): R;
    log<R = void, P0 = NSDictionary>(_log: P0): R;
  }
  namespace classes {
    export interface MSPluginLogActionProtocol<T = any> {  }
  }
}
