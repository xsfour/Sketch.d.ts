/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserAppleScriptTask<T = any> extends NSUserScriptTask {
    executeWithAppleEvent_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_executeWithAppleEvent: P0, _completionHandler: P1): R;
    isParentDefaultTarget<R = boolean>(): R;
    setIsParentDefaultTarget<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSUserAppleScriptTask<T = any> extends NSUserScriptTask {
      alloc<R = NSUserAppleScriptTask>(): R;
      new: <R = NSUserAppleScriptTask>() => R;
    }
  }
}

declare const NSUserAppleScriptTask: cocoa.classes.NSUserAppleScriptTask;
