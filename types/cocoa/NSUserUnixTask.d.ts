/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserUnixTask<T = any> extends cocoa.NSUserScriptTask {
    executeWithArguments_completionHandler<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_executeWithArguments: P0, _completionHandler: P1): R;
    standardError<R = cocoa.NSFileHandle>(): R;
    setStandardError<R = void, P0 = cocoa.NSFileHandle>(_v: P0): R;
    standardInput<R = cocoa.NSFileHandle>(): R;
    setStandardInput<R = void, P0 = cocoa.NSFileHandle>(_v: P0): R;
    standardOutput<R = cocoa.NSFileHandle>(): R;
    setStandardOutput<R = void, P0 = cocoa.NSFileHandle>(_v: P0): R;
  }
  namespace classes {
    export interface NSUserUnixTask<T = any> extends cocoa.classes.NSUserScriptTask {
      alloc<R = NSUserUnixTask>(): R;
      new: <R = NSUserUnixTask>() => R;
    }
  }
}

declare const NSUserUnixTask: cocoa.classes.NSUserUnixTask;
