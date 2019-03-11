/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserAppleScriptTask<T = any> extends cocoa.NSUserScriptTask {
    executeWithAppleEvent_completionHandler<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_executeWithAppleEvent: P0, _completionHandler: P1): R;
    isParentDefaultTarget<R = boolean>(): R;
    setIsParentDefaultTarget<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSUserAppleScriptTask<T = any> extends cocoa.classes.NSUserScriptTask {
      alloc<R = NSUserAppleScriptTask>(): R;
      new: <R = NSUserAppleScriptTask>() => R;
    }
  }
}

declare const NSUserAppleScriptTask: cocoa.classes.NSUserAppleScriptTask;
