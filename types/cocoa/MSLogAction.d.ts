/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLogAction<T = any> extends cocoa.MSAction, cocoa.MSPluginLogActionProtocol {
    label<R = unknown>(): R;
    URLForLogFile<R = unknown>(): R;
    writeToLogFile<R = void, P0 = unknown>(_writeToLogFile: P0): R;
    logs<R = cocoa.NSMutableArray>(): R;
    setLogs<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
  }
  namespace classes {
    export interface MSLogAction<T = any> extends cocoa.classes.MSAction, cocoa.classes.MSPluginLogActionProtocol {
      alloc<R = MSLogAction>(): R;
      new: <R = MSLogAction>() => R;
    }
  }
}

declare const MSLogAction: cocoa.classes.MSLogAction;
