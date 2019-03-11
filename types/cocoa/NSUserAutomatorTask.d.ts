/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserAutomatorTask<T = any> extends cocoa.NSUserScriptTask {
    executeWithInput_completionHandler<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_executeWithInput: P0, _completionHandler: P1): R;
    variables<R = cocoa.NSDictionary>(): R;
    setVariables<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
  }
  namespace classes {
    export interface NSUserAutomatorTask<T = any> extends cocoa.classes.NSUserScriptTask {
      alloc<R = NSUserAutomatorTask>(): R;
      new: <R = NSUserAutomatorTask>() => R;
    }
  }
}

declare const NSUserAutomatorTask: cocoa.classes.NSUserAutomatorTask;
