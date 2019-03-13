/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCloseCommand<T = any> extends NSScriptCommand {
    saveOptions<R = number>(): R;
  }
  namespace classes {
    export interface NSCloseCommand<T = any> extends NSScriptCommand {
      alloc<R = NSCloseCommand>(): R;
      new: <R = NSCloseCommand>() => R;
    }
  }
}

declare const NSCloseCommand: cocoa.classes.NSCloseCommand;
