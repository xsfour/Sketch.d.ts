/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExistsCommand<T = any> extends cocoa.NSScriptCommand {}
  namespace classes {
    export interface NSExistsCommand<T = any> extends cocoa.classes.NSScriptCommand {
      alloc<R = NSExistsCommand>(): R;
      new: <R = NSExistsCommand>() => R;
    }
  }
}

declare const NSExistsCommand: cocoa.classes.NSExistsCommand;
