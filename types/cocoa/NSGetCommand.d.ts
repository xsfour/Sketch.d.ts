/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGetCommand<T = any> extends cocoa.NSScriptCommand {}
  namespace classes {
    export interface NSGetCommand<T = any> extends cocoa.classes.NSScriptCommand {
      alloc<R = NSGetCommand>(): R;
      new: <R = NSGetCommand>() => R;
    }
  }
}

declare const NSGetCommand: cocoa.classes.NSGetCommand;
