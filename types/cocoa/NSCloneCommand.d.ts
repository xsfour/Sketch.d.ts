/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCloneCommand<T = any> extends NSScriptCommand {
    setReceiversSpecifier<R = void, P0 = unknown>(_setReceiversSpecifier: P0): R;
    keySpecifier<R = NSScriptObjectSpecifier>(): R;
  }
  namespace classes {
    export interface NSCloneCommand<T = any> extends NSScriptCommand {
      alloc<R = NSCloneCommand>(): R;
      new: <R = NSCloneCommand>() => R;
    }
  }
}

declare const NSCloneCommand: cocoa.classes.NSCloneCommand;
