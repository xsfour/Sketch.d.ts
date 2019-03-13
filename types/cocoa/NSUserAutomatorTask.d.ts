/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserAutomatorTask<T = any> extends NSUserScriptTask {
    executeWithInput_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_executeWithInput: P0, _completionHandler: P1): R;
    variables<R = NSDictionary>(): R;
    setVariables<R = void, P0 = NSDictionary>(_v: P0): R;
  }
  namespace classes {
    export interface NSUserAutomatorTask<T = any> extends NSUserScriptTask {
      alloc<R = NSUserAutomatorTask>(): R;
      new: <R = NSUserAutomatorTask>() => R;
    }
  }
}

declare const NSUserAutomatorTask: cocoa.classes.NSUserAutomatorTask;
