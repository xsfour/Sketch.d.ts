/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCountCommand<T = any> extends cocoa.NSScriptCommand {}
  namespace classes {
    export interface NSCountCommand<T = any> extends cocoa.classes.NSScriptCommand {
      alloc<R = NSCountCommand>(): R;
      new: <R = NSCountCommand>() => R;
    }
  }
}

declare const NSCountCommand: cocoa.classes.NSCountCommand;
