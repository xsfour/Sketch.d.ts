/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginLogActionProtocol<T0 = void, T1 = void, T2 = void> {
    logString<R = NSString>(): R;
    clearLog<R = void>(): R;
    log<R = void, P0 = NSDictionary>(_log: P0): R;
  }
  namespace MSPluginLogActionProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
