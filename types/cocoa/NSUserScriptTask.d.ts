/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserScriptTask<T = any> extends cocoa.NSObject {
    executeWithInterpreter_arguments<R = void, P0 = unknown, P1 = unknown>(_executeWithInterpreter: P0, _arguments: P1): R;
    interpretErrorStatus_withOutput<R = unknown, P0 = number, P1 = unknown>(_interpretErrorStatus: P0, _withOutput: P1): R;
    executeWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_executeWithCompletionHandler: P0): R;
    dealloc<R = void>(): R;
    initWithURL_error<R = unknown, P0 = unknown, P1 = unknown>(_initWithURL: P0, _error: P1): R;
    standardError<R = cocoa.NSFileHandle>(): R;
    setStandardError<R = void, P0 = cocoa.NSFileHandle>(_v: P0): R;
    standardOutput<R = cocoa.NSFileHandle>(): R;
    setStandardOutput<R = void, P0 = cocoa.NSFileHandle>(_v: P0): R;
    standardInput<R = cocoa.NSFileHandle>(): R;
    setStandardInput<R = void, P0 = cocoa.NSFileHandle>(_v: P0): R;
    showsProgressInMenuBar<R = boolean>(): R;
    setShowsProgressInMenuBar<R = void, P0 = boolean>(_v: P0): R;
    scriptURL<R = cocoa.NSURL>(): R;
  }
  namespace classes {
    export interface NSUserScriptTask<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSUserScriptTask>(): R;
      new: <R = NSUserScriptTask>() => R;
      badFileError<R = unknown, P0 = unknown>(_badFileError: P0): R;
      isValidScriptFile_error<R = boolean, P0 = unknown, P1 = unknown>(_isValidScriptFile: P0, _error: P1): R;
    }
  }
}

declare const NSUserScriptTask: cocoa.classes.NSUserScriptTask;
