/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLogAction<T = any> extends MSAction, MSPluginLogActionProtocol {
    label<R = unknown>(): R;
    URLForLogFile<R = unknown>(): R;
    writeToLogFile<R = void, P0 = unknown>(_writeToLogFile: P0): R;
    logs<R = NSMutableArray>(): R;
    setLogs<R = void, P0 = NSMutableArray>(_v: P0): R;
  }
  namespace classes {
    export interface MSLogAction<T = any> extends MSAction, MSPluginLogActionProtocol {
      alloc<R = MSLogAction>(): R;
      new: <R = MSLogAction>() => R;
    }
  }
}

declare const MSLogAction: cocoa.classes.MSLogAction;
