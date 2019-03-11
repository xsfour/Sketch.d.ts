/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCloneCommand<T = any> extends cocoa.NSScriptCommand {
    setReceiversSpecifier<R = void, P0 = unknown>(_setReceiversSpecifier: P0): R;
    keySpecifier<R = cocoa.NSScriptObjectSpecifier>(): R;
  }
  namespace classes {
    export interface NSCloneCommand<T = any> extends cocoa.classes.NSScriptCommand {
      alloc<R = NSCloneCommand>(): R;
      new: <R = NSCloneCommand>() => R;
    }
  }
}

declare const NSCloneCommand: cocoa.classes.NSCloneCommand;
