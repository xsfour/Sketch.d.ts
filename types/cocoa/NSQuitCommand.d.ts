/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSQuitCommand<T = any> extends cocoa.NSScriptCommand {
    saveOptions<R = number>(): R;
  }
  namespace classes {
    export interface NSQuitCommand<T = any> extends cocoa.classes.NSScriptCommand {
      alloc<R = NSQuitCommand>(): R;
      new: <R = NSQuitCommand>() => R;
    }
  }
}

declare const NSQuitCommand: cocoa.classes.NSQuitCommand;
