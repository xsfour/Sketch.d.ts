/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserUnixTask<T = any> extends NSUserScriptTask {
    executeWithArguments_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_executeWithArguments: P0, _completionHandler: P1): R;
    standardError<R = NSFileHandle>(): R;
    setStandardError<R = void, P0 = NSFileHandle>(_v: P0): R;
    standardInput<R = NSFileHandle>(): R;
    setStandardInput<R = void, P0 = NSFileHandle>(_v: P0): R;
    standardOutput<R = NSFileHandle>(): R;
    setStandardOutput<R = void, P0 = NSFileHandle>(_v: P0): R;
  }
  namespace classes {
    export interface NSUserUnixTask<T = any> extends NSUserScriptTask {
      alloc<R = NSUserUnixTask>(): R;
      new: <R = NSUserUnixTask>() => R;
    }
  }
}

declare const NSUserUnixTask: cocoa.classes.NSUserUnixTask;
