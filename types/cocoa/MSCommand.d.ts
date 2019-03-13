/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCommand<T = any> extends NSObject {
    run<R = unknown>(): R;
  }
  namespace classes {
    export interface MSCommand<T = any> extends NSObject {
      alloc<R = MSCommand>(): R;
      new: <R = MSCommand>() => R;
      runWithArguments<R = unknown, P0 = CDUnknownBlockType>(_runWithArguments: P0): R;
    }
  }
}

declare const MSCommand: cocoa.classes.MSCommand;
