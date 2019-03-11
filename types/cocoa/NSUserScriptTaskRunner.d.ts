/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserScriptTaskRunner<T = any> extends cocoa.NSObject, cocoa.NSUserScriptTaskRunnerProtocol {
    isSanitaryArgumentList_forInterpreter<R = boolean, P0 = unknown, P1 = unknown>(_isSanitaryArgumentList: P0, _forInterpreter: P1): R;
    isValidScriptPath<R = boolean, P0 = unknown>(_isValidScriptPath: P0): R;
    dealloc<R = void>(): R;
    initWithConnection<R = unknown, P0 = unknown>(_initWithConnection: P0): R;
  }
  namespace classes {
    export interface NSUserScriptTaskRunner<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSUserScriptTaskRunnerProtocol {
      alloc<R = NSUserScriptTaskRunner>(): R;
      new: <R = NSUserScriptTaskRunner>() => R;
    }
  }
}

declare const NSUserScriptTaskRunner: cocoa.classes.NSUserScriptTaskRunner;
