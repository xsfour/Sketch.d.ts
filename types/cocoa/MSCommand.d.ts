/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCommand<T = any> extends cocoa.NSObject {
    run<R = unknown>(): R;
  }
  namespace classes {
    export interface MSCommand<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSCommand>(): R;
      new: <R = MSCommand>() => R;
      runWithArguments<R = unknown, P0 = cocoa.CDUnknownBlockType>(_runWithArguments: P0): R;
    }
  }
}

declare const MSCommand: cocoa.classes.MSCommand;
